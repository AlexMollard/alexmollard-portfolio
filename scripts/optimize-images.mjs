/**
 * Converts PNG/JPG assets to WebP and updates all source references in-place.
 * Replaces the original file with a .webp sibling, then rewrites any path
 * strings found in src/ so nothing breaks.
 *
 * PNG  → WebP quality 85, effort 6 (lossy, alpha preserved)
 * JPG  → WebP quality 85, effort 6
 * GIF  → re-compressed with gifsicle -O3 (kept as GIF — animated WebP is niche)
 * WebP → skipped (already converted)
 */

import sharp from 'sharp';
import gifsicle from 'gifsicle';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { readdir, stat, readFile, writeFile, rename, unlink } from 'node:fs/promises';
import { join, extname, relative, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { randomBytes } from 'node:crypto';

const execFileAsync = promisify(execFile);

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const MEDIA_DIR = join(ROOT, 'public', 'media');
const SRC_DIR = join(ROOT, 'src');

async function* walk(dir) {
	for (const entry of await readdir(dir, { withFileTypes: true })) {
		const full = join(dir, entry.name);
		if (entry.isDirectory()) {
			yield* walk(full);
		} else {
			yield full;
		}
	}
}

function formatBytes(bytes) {
	if (bytes >= 1024 * 1024) return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
	return `${(bytes / 1024).toFixed(1)} KB`;
}

// Normalise an absolute fs path under public/ to a web-root-relative string.
// e.g. C:\…\public\media\foo.jpg → /media/foo.jpg
function toWebPath(absPath) {
	return '/' + relative(join(ROOT, 'public'), absPath).replace(/\\/g, '/');
}

let totalBefore = 0;
let totalAfter = 0;
let skipped = 0;
let processed = 0;

// old web path → new web path, e.g. /media/foo.jpg → /media/foo.webp
const conversions = new Map();

const ext = (f) => extname(f).toLowerCase();

for await (const filePath of walk(MEDIA_DIR)) {
	const e = ext(filePath);

	if (e === '.gif') {
		const { size: before } = await stat(filePath);
		const tmp = join(dirname(filePath), `_tmp-${randomBytes(6).toString('hex')}.gif`);
		try {
			await execFileAsync(gifsicle, ['--optimize=3', '--output', tmp, filePath]);
			const after = (await stat(tmp)).size;
			const saved = before - after;
			const rel = relative(ROOT, filePath);
			totalBefore += before;
			if (saved > 0) {
				await rename(tmp, filePath);
				totalAfter += after;
				processed++;
				const pct = ((saved / before) * 100).toFixed(1);
				console.log(`  ✓  ${rel}  ${formatBytes(before)} → ${formatBytes(after)}  (−${pct}%)`);
			} else {
				await unlink(tmp);
				totalAfter += before;
				processed++;
				console.log(`  =  ${rel}  already optimal (${formatBytes(before)})`);
			}
		} catch (err) {
			console.error(`  ERROR ${relative(ROOT, filePath)}: ${err.message}`);
			try { await unlink(tmp); } catch {}
		}
		continue;
	}

	if (e === '.webp') {
		console.log(`  skip  ${relative(ROOT, filePath)}`);
		skipped++;
		continue;
	}

	if (!['.png', '.jpg', '.jpeg'].includes(e)) continue;

	const { size: before } = await stat(filePath);
	const webpPath = filePath.replace(/\.(jpg|jpeg|png)$/i, '.webp');

	let output;
	try {
		const inputBuffer = await readFile(filePath);
		output = await sharp(inputBuffer)
			.webp({ quality: 85, effort: 6, smartSubsample: true })
			.toBuffer();
	} catch (err) {
		console.error(`  ERROR ${relative(ROOT, filePath)}: ${err.message}`);
		continue;
	}

	const after = output.byteLength;
	const saved = before - after;
	const pct = ((saved / before) * 100).toFixed(1);
	const rel = relative(ROOT, filePath);

	totalBefore += before;
	totalAfter += after;
	processed++;

	await writeFile(webpPath, output);
	await unlink(filePath);
	conversions.set(toWebPath(filePath), toWebPath(webpPath));

	if (saved > 0) {
		console.log(`  ✓  ${rel}  ${formatBytes(before)} → ${formatBytes(after)}  (−${pct}%)`);
	} else {
		console.log(`  ~  ${rel}  converted (${formatBytes(before)} → ${formatBytes(after)}, +${Math.abs(pct)}% — WebP kept)`);
	}
}

// Update path references in source files
if (conversions.size > 0) {
	console.log('\nUpdating source references…');
	const SOURCE_EXTS = new Set(['.md', '.mdx', '.astro', '.ts', '.tsx', '.js', '.mjs']);

	for await (const filePath of walk(SRC_DIR)) {
		if (!SOURCE_EXTS.has(ext(filePath))) continue;

		let content = await readFile(filePath, 'utf8');
		let changed = false;

		for (const [oldPath, newPath] of conversions) {
			if (content.includes(oldPath)) {
				content = content.replaceAll(oldPath, newPath);
				changed = true;
			}
		}

		if (changed) {
			await writeFile(filePath, content, 'utf8');
			console.log(`  ✓  ${relative(ROOT, filePath)}`);
		}
	}
}

const savedTotal = totalBefore - totalAfter;
console.log('');
console.log(`Processed: ${processed} files  |  Skipped: ${skipped}`);
console.log(`Before: ${formatBytes(totalBefore)}  →  After: ${formatBytes(totalAfter)}`);
if (totalBefore > 0) {
	console.log(`Saved:  ${formatBytes(savedTotal)}  (${((savedTotal / totalBefore) * 100).toFixed(1)}%)`);
}

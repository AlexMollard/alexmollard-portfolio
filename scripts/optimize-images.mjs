/**
 * Losslessly optimizes PNG, JPG, and GIF assets in public/media.
 *
 * PNG  → re-compressed at max zlib level, metadata stripped (truly lossless)
 * JPG  → metadata stripped + recompressed with mozjpeg at quality 90 (visually lossless)
 * GIF  → re-compressed with gifsicle -O3 (lossless)
 * WebP → skipped (already well-compressed)
 */

import sharp from 'sharp';
import gifsicle from 'gifsicle';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { readdir, stat, readFile, writeFile, rename, unlink, copyFile } from 'node:fs/promises';
import { join, extname, relative, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { randomBytes } from 'node:crypto';

const execFileAsync = promisify(execFile);

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const MEDIA_DIR = join(ROOT, 'public', 'media');

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

let totalBefore = 0;
let totalAfter = 0;
let skipped = 0;
let processed = 0;

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

	if (!['.png', '.jpg', '.jpeg'].includes(e)) {
		if (['.webp', '.svg'].includes(e)) {
			console.log(`  skip  ${relative(ROOT, filePath)}`);
			skipped++;
		}
		continue;
	}

	const { size: before } = await stat(filePath);

	let output;
	try {
		// Read fully into buffer first so the file handle is released before we write back
		const inputBuffer = await readFile(filePath);
		const img = sharp(inputBuffer);

		if (e === '.png') {
			output = await img
				.png({ compressionLevel: 9, adaptiveFiltering: true, effort: 10 })
				.toBuffer();
		} else {
			// JPG — mozjpeg at quality 90 is visually indistinguishable for photos
			output = await img
				.jpeg({ quality: 90, mozjpeg: true })
				.toBuffer();
		}
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

	if (saved > 0) {
		await writeFile(filePath, output);
		console.log(`  ✓  ${rel}  ${formatBytes(before)} → ${formatBytes(after)}  (−${pct}%)`);
	} else {
		// Don't write if sharp made it larger
		totalAfter = totalAfter - after + before;
		console.log(`  =  ${rel}  already optimal (${formatBytes(before)})`);
	}
}

const savedTotal = totalBefore - totalAfter;
console.log('');
console.log(`Processed: ${processed} files  |  Skipped: ${skipped}`);
console.log(`Before: ${formatBytes(totalBefore)}  →  After: ${formatBytes(totalAfter)}`);
console.log(`Saved:  ${formatBytes(savedTotal)}  (${((savedTotal / totalBefore) * 100).toFixed(1)}%)`);

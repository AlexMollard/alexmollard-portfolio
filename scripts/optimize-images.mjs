/**
 * Losslessly optimizes PNG and JPG assets in public/media.
 *
 * PNG  → re-compressed at max zlib level, metadata stripped (truly lossless)
 * JPG  → metadata stripped + recompressed with mozjpeg at quality 90 (visually lossless)
 * GIF  → skipped (requires a separate tool like gifsicle)
 * WebP → skipped (already well-compressed)
 */

import sharp from 'sharp';
import { readdir, stat, readFile, writeFile } from 'node:fs/promises';
import { join, extname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

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
	if (!['.png', '.jpg', '.jpeg'].includes(e)) {
		if (['.gif', '.webp', '.svg'].includes(e)) {
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

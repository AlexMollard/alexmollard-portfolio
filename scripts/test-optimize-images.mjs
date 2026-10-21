import assert from 'node:assert/strict';
import { mkdtemp, mkdir, copyFile, writeFile, readFile, rm, stat } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';
import sharp from 'sharp';

// Keep fixtures below the repo so the copied script resolves its dependencies.
const root = fileURLToPath(new URL('..', import.meta.url));
const fixture = await mkdtemp(join(root, '.image-test-'));
try {
	await mkdir(join(fixture, 'scripts'));
	await mkdir(join(fixture, 'public/media'), { recursive: true });
	await mkdir(join(fixture, 'src'));
	await copyFile(join(root, 'scripts/optimize-images.mjs'), join(fixture, 'scripts/optimize-images.mjs'));
	const media = join(fixture, 'public/media');
	const pixels = Buffer.alloc(16 * 32 * 4);
	for (let i = 0; i < pixels.length; i += 4) {
		pixels[i + (i < pixels.length / 2 ? 0 : 1)] = 255;
		pixels[i + 3] = i % 16 === 0 ? 0 : 255;
	}
	const gif = join(media, 'animation.gif');
	await sharp(pixels, { raw: { width: 16, height: 32, channels: 4, pageHeight: 16 } })
		.gif({ delay: [100, 230], loop: 3 }).toFile(gif);
	const original = await sharp(await readFile(gif), { animated: true }).raw().toBuffer();
	// A harmless trailing block ensures recompression takes the replacement branch.
	await writeFile(gif, Buffer.concat([await readFile(gif), Buffer.alloc(4096)]));
	await sharp({ create: { width: 16, height: 16, channels: 4, background: '#ff000080' } }).png().toFile(join(media, 'alpha.png'));
	await writeFile(join(fixture, 'src/page.astro'), '<img src="/media/alpha.png" />');
	const output = execFileSync(process.execPath, [join(fixture, 'scripts/optimize-images.mjs')], { encoding: 'utf8' });
	assert.ok(!output.includes('ERROR'), output);
	assert.ok((await stat(gif)).size < 4096);
	const meta = await sharp(await readFile(gif), { animated: true }).metadata();
	assert.equal(meta.pages, 2);
	assert.deepEqual(meta.delay, [100, 230]);
	assert.equal(meta.loop, 3);
	assert.deepEqual(await sharp(await readFile(gif), { animated: true }).raw().toBuffer(), original);
	assert.equal((await sharp(await readFile(join(media, 'alpha.webp'))).metadata()).hasAlpha, true);
	assert.match(await readFile(join(fixture, 'src/page.astro'), 'utf8'), /alpha\.webp/);
	await assert.rejects(stat(join(media, 'alpha.png')), { code: 'ENOENT' });
	console.log('Image optimizer: animation frames, timing, loop, pixels, alpha and source rewrites passed.');
} finally {
	await rm(fixture, { recursive: true, force: true });
}

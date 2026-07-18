import sharp from 'sharp';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const input = path.resolve(__dirname, '../public/images/logo-transparent.png');
const output = path.resolve(__dirname, '../public/images/logo-transparent.png');

const image = sharp(input);
const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });
const out = Buffer.alloc(data.length);
const width = info.width;
const height = info.height;

for (let y = 0; y < height; y += 1) {
  for (let x = 0; x < width; x += 1) {
    const idx = ((y * width) + x) * 4;
    const alpha = data[idx + 3];

    if (alpha > 0) {
      out[idx] = data[idx];
      out[idx + 1] = data[idx + 1];
      out[idx + 2] = data[idx + 2];
      out[idx + 3] = data[idx + 3];
      continue;
    }

    let hasNeighbor = false;
    for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [-1, 1], [1, -1], [-1, -1]]) {
      const nx = x + dx;
      const ny = y + dy;
      if (nx < 0 || ny < 0 || nx >= width || ny >= height) continue;
      const nidx = ((ny * width) + nx) * 4;
      if (data[nidx + 3] > 0) {
        hasNeighbor = true;
        break;
      }
    }

    if (hasNeighbor) {
      out[idx] = 255;
      out[idx + 1] = 255;
      out[idx + 2] = 255;
      out[idx + 3] = 40;
    } else {
      out[idx] = 0;
      out[idx + 1] = 0;
      out[idx + 2] = 0;
      out[idx + 3] = 0;
    }
  }
}

await sharp(out, { raw: { width: info.width, height: info.height, channels: 4 } })
  .png()
  .toFile(output);

console.log('outlined', info.width, 'x', info.height);

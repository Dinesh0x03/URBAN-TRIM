import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const input = path.resolve(__dirname, '../public/images/logo.png');
const output = path.resolve(__dirname, '../public/images/logo-transparent.png');

const { data, info } = await sharp(input).raw().toBuffer({ resolveWithObject: true });
const out = Buffer.alloc(data.length);

for (let i = 0; i < data.length; i += 4) {
  const r = data[i];
  const g = data[i + 1];
  const b = data[i + 2];
  const a = data[i + 3];
  const isLight = r > 230 && g > 230 && b > 230;
  const isTransparent = a < 140 || isLight;

  out[i] = r;
  out[i + 1] = g;
  out[i + 2] = b;
  out[i + 3] = isTransparent ? 0 : a;
}

await sharp(out, { raw: { width: info.width, height: info.height, channels: 4 } })
  .png()
  .toFile(output);

console.log('wrote', output);

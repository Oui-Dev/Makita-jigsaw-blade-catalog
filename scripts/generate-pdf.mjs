import { access, readFile } from 'node:fs/promises';
import { createServer } from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const INDEX = path.join(DIST, 'index.html');

function parseArgs(argv) {
  const outputIndex = argv.indexOf('--output');
  if (outputIndex !== -1 && argv[outputIndex + 1]) {
    return { output: argv[outputIndex + 1] };
  }
  return {};
}

async function readDefaultOutput() {
  const pkg = JSON.parse(await readFile(path.join(ROOT, 'package.json'), 'utf8'));
  return `makita-jigsaw-blade-catalog-v${pkg.version}.pdf`;
}

function createStaticServer(root) {
  return createServer(async (req, res) => {
    try {
      const url = new URL(req.url ?? '/', 'http://localhost');
      const relativePath = url.pathname === '/' ? 'index.html' : url.pathname.slice(1);
      const filePath = path.normalize(path.join(root, relativePath));

      if (!filePath.startsWith(root)) {
        res.writeHead(403).end();
        return;
      }

      const content = await readFile(filePath);
      const ext = path.extname(filePath);
      const types = {
        '.html': 'text/html; charset=utf-8',
        '.ico': 'image/x-icon',
        '.css': 'text/css; charset=utf-8',
        '.js': 'text/javascript; charset=utf-8',
      };
      res.writeHead(200, { 'Content-Type': types[ext] ?? 'application/octet-stream' });
      res.end(content);
    } catch {
      res.writeHead(404).end();
    }
  });
}

function listen(server) {
  return new Promise((resolve, reject) => {
    server.listen(0, '127.0.0.1', () => {
      const address = server.address();
      if (!address || typeof address === 'string') {
        reject(new Error('Failed to bind static server'));
        return;
      }
      resolve(address.port);
    });
    server.on('error', reject);
  });
}

async function main() {
  try {
    await access(INDEX);
  } catch {
    console.error('dist/index.html not found. Run `npm run build` first.');
    process.exit(1);
  }

  const { output = await readDefaultOutput() } = parseArgs(process.argv.slice(2));
  const outputPath = path.resolve(ROOT, output);

  const server = createStaticServer(DIST);
  const port = await listen(server);
  const url = `http://127.0.0.1:${port}/`;

  const browser = await chromium.launch();
  try {
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle' });
    await page.waitForTimeout(500);

    await page.pdf({
      path: outputPath,
      format: 'A4',
      printBackground: true,
      margin: { top: '12mm', right: '12mm', bottom: '12mm', left: '12mm' },
    });

    console.log(`PDF written to ${outputPath}`);
  } finally {
    await browser.close();
    await new Promise((resolve, reject) => {
      server.close((error) => (error ? reject(error) : resolve()));
    });
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

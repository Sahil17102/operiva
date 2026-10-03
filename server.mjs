import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';
import worker from './dist/server/index.js';

const root = fileURLToPath(new URL('./dist/client/', import.meta.url));
const port = Number(process.env.PORT || 3000);

const contentTypes = {
  '.css': 'text/css; charset=utf-8',
  '.gif': 'image/gif',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

const assets = {
  async fetch(request) {
    const url = new URL(request.url);
    const relativePath = decodeURIComponent(url.pathname).replace(/^\/+/, '');
    const filePath = normalize(join(root, relativePath));
    if (!filePath.startsWith(root)) return new Response('Forbidden', { status: 403 });
    try {
      const fileStat = await stat(filePath);
      if (!fileStat.isFile()) return new Response('Not found', { status: 404 });
      const body = await readFile(filePath);
      return new Response(body, {
        headers: {
          'content-type': contentTypes[extname(filePath).toLowerCase()] || 'application/octet-stream',
          'cache-control': relativePath.startsWith('_next/static/') ? 'public, max-age=31536000, immutable' : 'public, max-age=3600',
        },
      });
    } catch {
      return new Response('Not found', { status: 404 });
    }
  },
};

createServer(async (incoming, outgoing) => {
  try {
    const host = incoming.headers.host || `localhost:${port}`;
    const protocol = incoming.headers['x-forwarded-proto'] || 'http';
    const url = `${protocol}://${host}${incoming.url || '/'}`;
    const chunks = [];
    if (incoming.method !== 'GET' && incoming.method !== 'HEAD') {
      for await (const chunk of incoming) chunks.push(chunk);
    }
    const request = new Request(url, {
      method: incoming.method,
      headers: incoming.headers,
      body: chunks.length ? Buffer.concat(chunks) : undefined,
    });
    const pending = [];
    const response = await worker.fetch(request, { ...process.env, ASSETS: assets }, {
      waitUntil(promise) { pending.push(Promise.resolve(promise)); },
      passThroughOnException() {},
    });
    outgoing.statusCode = response.status;
    response.headers.forEach((value, key) => outgoing.setHeader(key, value));
    if (incoming.method === 'HEAD' || !response.body) {
      outgoing.end();
    } else {
      outgoing.end(Buffer.from(await response.arrayBuffer()));
    }
    Promise.allSettled(pending).catch(() => {});
  } catch (error) {
    console.error(error);
    outgoing.statusCode = 500;
    outgoing.end('Internal server error');
  }
}).listen(port, '0.0.0.0', () => {
  console.log(`Opervia is live on port ${port}`);
});

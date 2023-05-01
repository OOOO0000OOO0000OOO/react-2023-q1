import express from 'express';
import fs from 'fs/promises';
import { createServer as createViteServer } from 'vite';

async function createServer(
  config = {
    port: process.env.PORT || 5173,
    entry: '/src/entry-server.tsx',
  }
) {
  const app = express();

  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });

  app.use(vite.middlewares);

  app.use('*', async (request, response, next) => {
    const url = request.originalUrl;

    try {
      const index = await fs.readFile('./index.html', 'utf-8');
      const template = await vite.transformIndexHtml(url, index);
      const [before, after] = template.split('<!--ssr-outlet-->');

      const { render } = await vite.ssrLoadModule(config.entry);
      const { pipe } = await render(url, response, {
        onShellReady() {
          response.write(before);
          pipe(response);
        },
        onAllReady() {
          response.write(after);
          response.end();
        },
      });
    } catch (error) {
      if (error instanceof Error) {
        vite.ssrFixStacktrace(error);

        response.status(500);
        response.end(error.message);

        next(error);
      }
    }
  });

  app.listen(config.port);

  console.log(`🚀 Server is running on http://localhost:${config.port}/`);
}

createServer();

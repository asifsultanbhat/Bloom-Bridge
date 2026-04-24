
import { createServer } from 'vite';

(async () => {
  const server = await createServer({
    // any valid user config options, plus `mode` and `configFile`
    configFile: './vite.config.js',
    root: process.cwd(),
    server: {
      port: 5173
    }
  });
  await server.listen();

  server.printUrls();
  console.log('Vite server started successfully.');
})();

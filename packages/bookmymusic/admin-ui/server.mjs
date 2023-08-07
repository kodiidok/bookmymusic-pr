import pkg from 'http-proxy';
const { createProxyServer } = pkg;
import { createServer } from 'http';
import { parse } from 'url';
import next from 'next';
import nextConfig from '../admin-ui/next.config.js';

const dev = process.env.NODE_ENV !== 'production';
const hostname = 'localhost';
const port = 3030;
const customServer = true;
const conf = nextConfig;

const proxy = createProxyServer({});
const adminApi = 'http://localhost:3000/admin-api';

const app = next({
  dev,
  hostname,
  port,
  customServer,
  conf
});

const handle = app.getRequestHandler();
 
app.prepare().then(() => {
  createServer((req, res) => {
    try {
      const parsedUrl = parse(req.url, true)
      const { pathname, query } = parsedUrl
 
      if (pathname === '/admin-api') {
        proxy.web(req, res, { target: adminApi });
      } else {
        handle(req, res, parsedUrl)
      }
    } catch (err) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('internal server error')
    }
  })
    .once('error', (err) => {
      console.error(err)
      process.exit(1)
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`)
    })
})
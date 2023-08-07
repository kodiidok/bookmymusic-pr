import pkg from 'http-proxy';
const { createProxyServer } = pkg;
import http from "http";

const proxy = createProxyServer({});
const backendApi = 'http://localhost:3000/admin-api';

const server = http.createServer((req, res) => {
  if (req.url?.startsWith('/admin-api')) {
    req.url = req.url.replace(/^\/admin-api/, '/admin-api');
    proxy.web(req, res, { target: backendApi });
  } else {
    // Handle other requests here
    // For example, serve your Next.js frontend
  }
});

const port = 3030;

server.listen(port, () => {
  console.log(`proxy server: http://localhost/${port}`);
})
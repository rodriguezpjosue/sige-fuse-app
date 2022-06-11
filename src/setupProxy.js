const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    '/rest',
    createProxyMiddleware({
      // target: 'https://sige.emmanuel.pe',
      target: 'http://localhost:8069',
      // target: 'http://localhost:7069',
      changeOrigin: true,
    })
  );
};
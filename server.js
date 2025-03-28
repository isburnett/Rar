const express = require('express');
const httpProxy = require('http-proxy');
const path = require('path');

// Initialize express app and proxy server
const app = express();
const proxy = httpProxy.createProxyServer({});
const target = 'https://example.com';  // Replace with your target URL for proxy

// Serve static files (frontend)
app.use(express.static(path.join(__dirname, 'public')));

// Proxy endpoint
app.get('/proxy/*', (req, res) => {
  proxy.web(req, res, { target }, (err) => {
    console.error('Proxy error:', err);
    res.status(500).send('Proxy error.');
  });
});

// Serve the frontend
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Proxy server listening on port ${PORT}`);
});

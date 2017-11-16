'use strict';

const http = require('http');
const express = require('express');
const app = express();

// test page
app.get('/', (req, res) => {
  console.log('sending response...');
  res.send('<html><body>Hello World!</body></html>');
});

// start the server
const server = http.createServer(app).listen(3000, () => {
  console.log('server started');
});

module.exports = server;

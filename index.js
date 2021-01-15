const express = require('express');

const server = express();

server.use(express.json());

server.use((req, res, next) => {
  console.time('Request');
  console.log(`Método: ${req.method}; URL: ${req.url}`);
  next();
  console.timeEnd('Request');
});

server.get('/teste', (req, res) => {
  console.log('teste');
  return res.json({ teste1: 'teste2' });
});

server.listen(3001);

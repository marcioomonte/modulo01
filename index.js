const axios = require('axios');
const express = require('express');

const server = express();

server.use(express.json());

server.use((req, res, next) => {
  console.time('Request');
  console.log(`Método: ${req.method}; URL: ${req.url}`);
  next();
  console.timeEnd('Request');
});

server.post('/', async (req, res) => {
  const { data } = await axios.post(
    'https://api.suthubservice.com/hml/public/newdash?db=suthub'
  );

  return res.json(data.user);
});

server.listen(3001);

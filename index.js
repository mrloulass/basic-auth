'use strict';

require('dotenv').config();

const server = require ('./src/server.js');

const { dataBase } = require ('./src/models/index.js')

const PORT = process.env.PORT || 3000;

dataBase.sync().then(()=>{
  server.start(PORT);
}).catch(e => {
  console.error('Could not start server', e.message);
});

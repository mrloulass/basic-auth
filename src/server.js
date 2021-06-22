'use strict'

const express = require ('express');
const bcrypt = require ('bcrypt');
const base64 = require ('base-64');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

module.exports = {
  app: app,
  start:(PORT) =>{
    app.listen(PORT, () => console.log('server up'))
  }
}

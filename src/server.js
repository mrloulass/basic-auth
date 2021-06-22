'use strict'

const express = require ('express');
const app = express();

const usersRoutes = require ('./routes/users.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(usersRoutes);

module.exports = {
  app: app,
  start:(PORT) =>{
    app.listen(PORT, () => console.log('server up'))
  }
}

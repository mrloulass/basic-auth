'use strict'

require('dotenv').config();

const { Sequelize, DataTypes } = require('sequelize');

const usersModel = require('./users.js');

const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory:' 

const sequelize = new Sequelize (DATABASE_URL , {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    }
  }
});

const userSequModel = usersModel(sequelize,DataTypes);

module.exports = {
  dataBase: sequelize,
  users:userSequModel,
}

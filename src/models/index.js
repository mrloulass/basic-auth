'use strict'

require('dotenv').config();

const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory:';

const { Sequelize, DataTypes } = require('sequelize');

const usersModel = require('./users.js');

const sequelize = new Sequelize(DATABASE_URL, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    }
  }

});

const Users = usersModel(sequelize, DataTypes);

module.exports = {
  dataBase: sequelize,
  Users:Users

}

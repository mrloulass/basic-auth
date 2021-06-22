'use strict';

const usersModel = (sequelize, DataTypes)=> {
return sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  }
})
};

module.exports = usersModel;

'use strict';

const usersModel = (sequelize, DataTypes) => {
  let model =  sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    }

  });

  model.beforeCreate(async (user, options) => {
    console.log(options)
    user.password = await bcrypt.hash(user.password, 10);
  });

  model.authenticateBasic = async function (username, password) {
    const user = await this.findOne({ where: { username: username } });
    const valid = await bcrypt.compare(password, user.password);
    if (valid) {
      return user;
    } else {
      return new Error('Invalid User')
    }
  }
  return model;
};
module.exports = usersModel;

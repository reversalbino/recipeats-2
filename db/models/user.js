'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    hashedPassword: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Board, {foreignKey: 'userId'})
    User.hasMany(models.Review, {foreignKey: 'userId'})
    User.hasMany(models.Rating, {foreignKey: 'userId'})
  };
  return User;
};
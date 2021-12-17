'use strict';
module.exports = (sequelize, DataTypes) => {
  const Rating = sequelize.define('Rating', {
    value: DataTypes.INTEGER,
    recipeId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Rating.associate = function(models) {
    // associations can be defined here
    Rating.belongsTo(models.Recipe, {foreignKey: 'recipeId'})
    Rating.belongsTo(models.User, {foreignKey: 'userId'})
  };
  return Rating;
};
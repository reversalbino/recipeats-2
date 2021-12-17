'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    reviewText: DataTypes.STRING,
    recipeId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
    Review.belongsTo(models.Recipe, {foreignKey: 'recipeId'})
    Review.belongsTo(models.User, {foreignKey: 'userId'})
  };
  return Review;
};
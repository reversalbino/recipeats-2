'use strict';
module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define('Recipe', {
    title: DataTypes.STRING,
    image: DataTypes.STRING,
    author: DataTypes.STRING,
    categoryId: DataTypes.INTEGER
  }, {});
  Recipe.associate = function(models) {
    // associations can be defined here
    Recipe.belongsToMany(models.Board, {through: 'RecipesOnBoard', otherKey: 'boardId', foreignKey: 'recipeId'})
    Recipe.hasMany(models.Ingredient, {foreignKey: 'recipeId'})
    Recipe.hasMany(models.Instruction, {foreignKey: 'recipeId'})
    Recipe.hasMany(models.Review, {foreignKey: 'recipeId'})
    Recipe.hasMany(models.Rating, {foreignKey: 'recipeId'})
    Recipe.belongsTo(models.Category, {foreignKey: 'categoryId'})
  };
  return Recipe;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  const RecipesOnBoard = sequelize.define('RecipesOnBoard', {
    recipeId: DataTypes.INTEGER,
    boardId: DataTypes.INTEGER
  }, {});
  RecipesOnBoard.associate = function(models) {
    // associations can be defined here
    
  };
  return RecipesOnBoard;
};
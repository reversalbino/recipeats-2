'use strict';
module.exports = (sequelize, DataTypes) => {
  const Board = sequelize.define('Board', {
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Board.associate = function(models) {
    // associations can be defined here
    Board.belongsTo(models.User, {foreignKey: 'userId'})
    Board.belongsToMany(models.Recipe, {through: 'RecipesOnBoard', otherKey: 'recipeId', foreignKey: 'boardId'})
  };
  return Board;
};
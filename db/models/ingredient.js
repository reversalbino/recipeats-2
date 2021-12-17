'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ingredient = sequelize.define('Ingredient', {
    name: DataTypes.STRING,
    measurementUnit: DataTypes.STRING,
    amount: DataTypes.STRING,
    recipeId: DataTypes.INTEGER
  }, {});
  Ingredient.associate = function(models) {
    // associations can be defined here
    Ingredient.belongsTo(models.Recipe, {foreignKey: 'recipeId'})
  };
  return Ingredient;
};
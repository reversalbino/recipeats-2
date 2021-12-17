'use strict';
module.exports = (sequelize, DataTypes) => {
  const Instruction = sequelize.define('Instruction', {
    specification: DataTypes.STRING,
    recipeId: DataTypes.INTEGER
  }, {});
  Instruction.associate = function(models) {
    // associations can be defined here
    Instruction.belongsTo(models.Recipe, {foreignKey: 'recipeId'})
  };
  return Instruction;
};
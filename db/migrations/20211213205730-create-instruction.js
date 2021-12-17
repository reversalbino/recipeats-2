'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Instructions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      // THIS WILL BE A JSON OBJECT WITH INSTRUCTION # AND INSTRUCTION TEXT AS KEY VALUE PAIRS 
      specification: {
        allowNull: false,
        type: Sequelize.TEXT
      }, 
      // listOrder: {
      //   allowNull: false,
      //   type: Sequelize.INTEGER
      // },
      recipeId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: "Recipes"}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Instructions');
  }
};
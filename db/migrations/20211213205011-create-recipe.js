'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Recipes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      image: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      author: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      // ratingId: {
      //   allowNull: false,
      //   type: Sequelize.INTEGER,
      //   references: {model: "Ratings"}
      // },
      // reviewId: {
      //   allowNull: false,
      //   type: Sequelize.INTEGER,
      //   references: {model: "Reviews"}
      // },
      categoryId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: "Categories"}
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
    return queryInterface.dropTable('Recipes');
  }
};
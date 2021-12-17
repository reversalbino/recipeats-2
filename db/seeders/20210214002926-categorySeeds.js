'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [
      {
      name: 'Italian',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
      name: 'Mexican',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Korean',
      createdAt: new Date(),
      updatedAt: new Date()
      },
    {
      name: 'Vietnamese',
      createdAt: new Date(),
      updatedAt: new Date()
        }
  ], {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};

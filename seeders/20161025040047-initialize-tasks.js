'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

      return queryInterface.bulkInsert('Cards', [{
        title: 'Take out the trash',
        priority: 'Low',
        status: 'Queue',
        createdBy:'JP',
        assignedTo:'Joe',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Do the dishes',
        priority: 'Low',
        status: 'Queue',
        createdBy:'JP',
        assignedTo:'Renee',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Wash the clothes',
        priority: 'Low',
        status: 'Queue',
        createdBy:'JP',
        assignedTo:'Marifel',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Walk the dog',
        priority: 'Low',
        status: 'Queue',
        createdBy:'JP',
        assignedTo:'Bryan',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Clean the toilet',
        priority: 'Low',
        status: 'Queue',
        createdBy:'JP',
        assignedTo:'Aaron',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Grocery Shopping',
        priority: 'Low',
        status: 'Queue',
        createdBy:'JP',
        assignedTo:'RayRay',
        createdAt: new Date(),
        updatedAt: new Date(),
      },],{});

  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('Cards', null, {});
  }
};

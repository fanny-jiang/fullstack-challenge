'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tenants', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true
      },
      name: {
        type: Sequelize.TEXT(256)
      },
      created_at: {
        type: Sequelize.DATE
      },
      updated_at: {
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tenants');
  }
};

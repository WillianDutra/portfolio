'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique:true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      role: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue:'user',
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('now'),
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};

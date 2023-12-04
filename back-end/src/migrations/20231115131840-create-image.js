'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('images', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      postId: {
        type: Sequelize.INTEGER,
        field: 'post_id',
        references: {
          model: 'blog_posts',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },
      imageDescription: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      imagePath: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('images');
  }
};

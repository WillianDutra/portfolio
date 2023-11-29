'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Posts_categories', {
      postId: {
        type: Sequelize.INTEGER,
        field: 'post_id',
        references: {
          model: 'Blog_posts',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
      },
      categoryId: {
        type: Sequelize.INTEGER,
        field: 'category_id',
        references: {
          model: 'Categories',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
      },
    });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('Posts_categories');
  }
};

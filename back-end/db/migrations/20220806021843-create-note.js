'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Notes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      noteText: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      services: {
        type: Sequelize.STRING,
      },
      pastColor: {
        type: Sequelize.STRING,
      },
      chemical: {
        type: Sequelize.STRING,
      },
      currColor: {
        type: Sequelize.STRING,
      },
      bookDays: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Notes');
  },
};

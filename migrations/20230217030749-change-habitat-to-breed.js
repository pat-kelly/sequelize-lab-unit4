'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.removeColumn('Penguins', 'habitat')
    await queryInterface.addColumn('Penguins', 'breed', {type: Sequelize.STRING})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('Penguins', 'breed', {type: Sequelize.STRING})
    await queryInterface.addColumn('Penguins', 'habitat')
  }
};

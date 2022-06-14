'use strict';

const { faker } = require('@faker-js/faker');

module.exports = {
  async up(queryInterface, Sequelize) {
    const userList = [
      {
        email: `${faker.name.firstName('male')}@gmail.com`,
        password: '123',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        email: `${faker.name.firstName('female')}@gmail.com`,
        password: '123',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];

    await queryInterface.bulkInsert(
      'users',
      userList,
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  },
};

'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Users',
      [
        {
          email: 'demo@user.io',
          firstName: 'Demo',
          lastName: 'User',
          phoneNumber: '425-555-5555',
          hashedPassword: bcrypt.hashSync('password'),
          admin: false,
          firstTime: false,
        },
        {
          email: 'geni@user.io',
          firstName: 'Geni',
          lastName: 'Admin',
          phoneNumber: '206-555-5555',
          hashedPassword: bcrypt.hashSync('password'),
          admin: true,
          firstTime: false,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      'Users',
      {
        firstName: { [Op.in]: ['Demo', 'Geni'] },
      },
      {}
    );
  },
};

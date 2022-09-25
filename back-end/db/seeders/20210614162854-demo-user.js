'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Users',
      [
        {
          id: 1,
          email: 'demo@user.io',
          firstName: 'Demo',
          lastName: 'User',
          phoneNumber: '425-555-5555',
          hashedPassword: bcrypt.hashSync('password'),
          admin: false,
          firstTime: false,
        },
        {
          id: 2,
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

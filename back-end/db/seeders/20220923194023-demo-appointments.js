'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Appointments',
      [
        {
          userId: 1,
          dateTime: new Date(),
          status: 'Deleted',
          type: 'Hair Cut',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          dateTime: new Date('2022-10-19'),
          status: 'Pending',
          type: 'Hair Dye',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          dateTime: new Date('2022-10-19'),
          status: 'Cancelled',
          type: 'Hair Dye',
          createdAt: new Date(),
          updatedAt: new Date()
        }
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

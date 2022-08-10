'use strict';
module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define('Transaction', {
    userId: DataTypes.INTEGER,
    appointmentId: DataTypes.INTEGER,
    cost: DataTypes.INTEGER,
    type: DataTypes.STRING,
    status: DataTypes.STRING,
  });

  Transaction.associate = (models) => {
    Transaction.belongsTo(models.User, {
      foreignKey: 'userId',
    });
    Transaction.belongsTo(models.Appointment, {
      foreignKey: 'appointmentId',
    });
  };

  return Transaction;
};

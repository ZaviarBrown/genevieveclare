'use strict';
module.exports = (sequelize, DataTypes) => {
  const Appointment = sequelize.define('Appointment', {
    userId: DataTypes.INTEGER,
    dateTime: DataTypes.DATE,
    status: DataTypes.STRING,
    type: DataTypes.STRING,
  });

  Appointment.associate = (models) => {
    Appointment.belongsTo(models.User, {
      foreignKey: 'userId',
    });
    Appointment.hasOne(models.Transaction, {
      foreignKey: 'appointmentId',
    });
    Appointment.hasOne(models.Review, {
      foreignKey: 'appointmentId',
    });
  };

  return Appointment;
};

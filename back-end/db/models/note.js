'use strict';

module.exports = (sequelize, DataTypes) => {
  const Note = sequelize.define('Note', {
    userId: DataTypes.INTEGER,
    noteText: DataTypes.TEXT,
    services: DataTypes.STRING,
    pastColor: DataTypes.STRING,
    chemical: DataTypes.STRING,
    currColor: DataTypes.STRING,
    bookDays: DataTypes.STRING,
  });

  Note.associate = (models) => {
    Note.belongsTo(models.User, {
      foreignKey: 'userId',
    });
  };

  return Note;
};

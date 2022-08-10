'use strict';

module.exports = (sequelize, DataTypes) => {
  const Note = sequelize.define('Note', {
    userId: DataTypes.INTEGER,
    note: DataTypes.TEXT,
  });

  Note.associate = (models) => {
    Note.belongsTo(models.User, {
      foreignKey: 'userId',
    });
  };

  return Note;
};

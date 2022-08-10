'use strict';

module.exports = (sequelize, DataTypes) => {
  const Photo = sequelize.define('Photo', {
    userId: DataTypes.INTEGER,
    link: DataTypes.STRING,
  });

  Photo.associate = (models) => {
    Photo.belongsTo(models.User, {
      foreignKey: 'userId',
    });
  };

  return Photo;
};

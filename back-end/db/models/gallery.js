'use strict';

module.exports = (sequelize, DataTypes) => {
  const Gallery = sequelize.define('Gallery', {
    link: DataTypes.STRING,
  });
  return Gallery;
};

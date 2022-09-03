'use strict';
const { Validator } = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isNotEmail(value) {
            if (Validator.isEmail(value)) {
              throw new Error('Cannot be an email.');
            }
          },
        },
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isNotEmail(value) {
            if (Validator.isEmail(value)) {
              throw new Error('Cannot be an email.');
            }
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [3, 256],
        },
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      hashedPassword: {
        type: DataTypes.STRING.BINARY,
        allowNull: false,
        validate: {
          len: [60, 60],
        },
      },
      admin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      firstTime: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    {
      defaultScope: {
        attributes: {
          exclude: [
            'hashedPassword',
            'firstName',
            'lastName',
            'phoneNumber',
            'createdAt',
            'updatedAt',
          ],
        },
      },
      scopes: {
        currentUser: {
          attributes: { exclude: ['hashedPassword', 'createdAt', 'updatedAt'] },
        },
        loginUser: {
          attributes: {},
        },
      },
    }
  );
  User.associate = function (models) {
    User.hasMany(models.Appointment, {
      foreignKey: 'userId',
    });
    User.hasMany(models.Transaction, {
      foreignKey: 'userId',
    });
    User.hasMany(models.Review, {
      foreignKey: 'userId',
    });
    User.hasMany(models.Photo, {
      foreignKey: 'userId',
    });
    User.hasMany(models.Note, {
      foreignKey: 'userId',
    });
  };
  User.prototype.toSafeObject = function () {
    // remember, this cannot be an arrow function
    const { id, firstName, lastName, email, phoneNumber, admin, firstTime } =
      this; // context will be the User instance
    return { id, firstName, lastName, email, phoneNumber, admin, firstTime };
  };
  User.prototype.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.hashedPassword.toString());
  };
  User.getCurrentUserById = async function (id) {
    return await User.scope('currentUser').findByPk(id);
  };
  User.login = async function ({ credential, password }) {
    const user = await User.scope('loginUser').findOne({
      where: {
        email: credential,
      },
    });
    if (user && user.validatePassword(password)) {
      return await User.scope('currentUser').findByPk(user.id);
    }
  };
  User.signup = async function ({
    firstName,
    lastName,
    email,
    phoneNumber,
    password,
  }) {
    const hashedPassword = bcrypt.hashSync(password);
    const user = await User.create({
      firstName,
      lastName,
      email,
      phoneNumber,
      hashedPassword,
      admin: false,
    });

    await user.createNote({ noteText: '' });

    return await User.scope('currentUser').findByPk(user.id);
  };
  return User;
};

import { Request, Response } from 'express';

export {};
const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

const validateSignup = [
  check('email')
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage('Please provide a valid email.'),
  check('firstName')
    .exists({ checkFalsy: true })
    .withMessage('Please provide your first name.'),
  check('lastName')
    .exists({ checkFalsy: true })
    .withMessage('Please provide your last name.'),
  check('firstName')
    .not()
    .isEmail()
    .withMessage('First name cannot be an email.'),
  check('lastName')
    .not()
    .isEmail()
    .withMessage('Last name cannot be an email.'),
  check('phoneNumber')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a phone number you can be easily reached at.'),
  check('password')
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage('Password must be 6 characters or more.'),
  handleValidationErrors,
];

router.post(
  '/',
  validateSignup,
  asyncHandler(async (req: Request, res: Response) => {
    const { email, phoneNumber, firstName, lastName, password } = req.body;
    const user = await User.signup({
      email,
      phoneNumber,
      firstName,
      lastName,
      password,
    });

    await setTokenCookie(res, user);

    return res.json({ user });
  })
);

module.exports = router;

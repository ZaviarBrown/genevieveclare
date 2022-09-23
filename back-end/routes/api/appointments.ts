import { Request, Response } from 'express';

const express = require('express');
const asyncHandler = require('express-async-handler');
const { Appointment } = require('../../db/models');

const router = express.Router();

router.get(
  '/',
  asyncHandler(async (req: Request, res: Response) => {
    const appointments = await Appointment.findAll();

    return res.json({ appointments });
  })
);

module.exports = router;

import { Request, Response } from 'express';

const express = require('express');
const asyncHandler = require('express-async-handler');
const { Note, User } = require('../../db/models');

const router = express.Router();

router.post(
  '/firstTime',
  asyncHandler(async (req: Request, res: Response) => {
    const {
      userId,
      noteText,
      services,
      pastColor,
      chemical,
      currColor,
      bookDays,
    } = req.body;

    const note = await Note.findOne({
      where: { userId },
      include: { model: User, attributes: ['firstName'] },
    });

    const msg = `${note.User.firstName} wanted you to know this: \n`;

    await note.update({
      noteText: msg + noteText,
      services,
      pastColor,
      chemical,
      currColor,
      bookDays,
    });

    const updated = await Note.findOne({ where: { userId } });

    return res.json({ updated });
  })
);

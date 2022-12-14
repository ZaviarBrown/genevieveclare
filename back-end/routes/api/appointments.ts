import { Request, Response } from 'express';

const express = require('express');
const asyncHandler = require('express-async-handler');
const { Appointment, User } = require('../../db/models');

const router = express.Router();

router.get(
    '/',
    asyncHandler(async (req: Request, res: Response) => {
        const appointments = await Appointment.findAll();

        return res.json({ appointments });
    })
);

router.get(
    '/:email',
    asyncHandler(async (req: Request, res: Response) => {
        const { email } = req.params;

        const appointments = await Appointment.findAll({
            include: {
                model: User,
                where: { email },
            },
        });

        return res.json({ appointments });
    })
);

module.exports = router;

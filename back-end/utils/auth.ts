import { NextFunction, Request, Response } from "express";

const jwt = require('jsonwebtoken');
const { jwtConfig } = require('../config');
const { User } = require('../db/models');

const { secret, expiresIn } = jwtConfig;

const setTokenCookie = (res: any, user: any) => {
    const token = jwt.sign(
        { data: user.toSafeObject() },
        secret,
        { expiresIn: parseInt(expiresIn) }, // 604,800 seconds = 1 week
    );

    const isProduction = process.env.NODE_ENV === "production";

    res.cookie('token', token, {
        maxAge: expiresIn * 1000, // maxAge in milliseconds
        httpOnly: true,
        secure: isProduction,
        sameSite: isProduction && "Lax",
    });

    return token;
};

const restoreUser = (req: any, res: Response, next: NextFunction) => {
    const { token } = req.cookies;

    return jwt.verify(token, secret, null, async (err: any, jwtPayload: any) => {
        if (err) {
            return next();
        }

        try {
            const { id } = jwtPayload.data;
            req.user = await User.scope('currentUser').findByPk(id);
        } catch (e) {
            res.clearCookie('token');
            return next();
        }

        if (!req.user) res.clearCookie('token');

        return next();
    });
};

const requireAuth = [
    restoreUser,
    function (req: any, res: Response, next: NextFunction) {
        if (req.user) return next();

        const err: any = new Error('Unauthorized');
        err.title = 'Unauthorized';
        err.errors = ['Unauthorized'];
        err.status = 401;
        return next(err);
    },
];

module.exports = { setTokenCookie, restoreUser, requireAuth };

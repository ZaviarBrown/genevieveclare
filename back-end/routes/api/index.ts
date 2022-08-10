const router = require('express').Router();
const sessionRouter = require('./session.ts');
const usersRouter = require('./users.ts');

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

module.exports = router;

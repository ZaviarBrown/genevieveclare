const router = require("express").Router();
const sessionRouter = require("./session.ts");
const usersRouter = require("./users.ts");
const appointmentRouter = require("./appointments.ts");

router.use("/appointments", appointmentRouter);

router.use("/session", sessionRouter);

router.use("/users", usersRouter);

module.exports = router;

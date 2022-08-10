import { Request, Response, NextFunction } from "express";

const { validationResult } = require('express-validator');

const handleValidationErrors = (req: Request, _res: Response, next: NextFunction) => {
  const validationErrors = validationResult(req);

  if (!validationErrors.isEmpty()) {
    const errors = validationErrors
      .array()
      .map((error: any) => `${error.msg}`);

    const err: any = Error('Bad request.');
    err.errors = errors;
    err.status = 400;
    err.title = 'Bad request.';
    next(err);
  }
  next();
};

module.exports = {
  handleValidationErrors,
};

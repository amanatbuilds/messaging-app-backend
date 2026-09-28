import { validationResult } from "express-validator";
import type { Request, Response, NextFunction } from "express";

export const validateUser = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send(
      errors.array().map((error) => {
        if (error.type === "field") {
          return { message: error.msg, field: error.path };
        } else {
          return { message: error.msg, field: "unknown" };
        }
      }),
    );
  }
  next();
};

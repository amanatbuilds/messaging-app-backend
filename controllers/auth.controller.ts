import type { Request, Response, NextFunction } from "express";
import { authService } from "../services/auth.services";

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { name, username, password } = req.body;
    const user = await authService.register(name, username, password);
    res.status(200).json("User Created");
  } catch (error) {
    next(error);
  }
};

import { NextFunction, Request, Response } from "express";
import { AppError } from "../error";

const verifyPermissionEditUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const userAdmin = req.user.admin;
  const idUser = req.user.id;
  const userId = parseInt(req.params.id);

  if (idUser !== userId) {
    if (!userAdmin) {
      throw new AppError("Insufficient Permission", 403);
    }
  }

  return next();
};

export default verifyPermissionEditUsers;
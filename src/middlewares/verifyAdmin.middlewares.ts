import { Request, Response, NextFunction } from "express";
import { AppError } from "../error";

const verifyAdminPermission = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const isAdmin = req.user.admin;

  if (!isAdmin) {
    throw new AppError("Insufficient permission", 403);
  }
  return next();
};

export default verifyAdminPermission;

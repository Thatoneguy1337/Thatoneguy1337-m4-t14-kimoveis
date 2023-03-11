import { Request, Response, NextFunction } from "express";
import { AppError } from "../error";

const verifyAdminPermission = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    const isAdmin = req.user.admin;

    if (!isAdmin) {
      throw new AppError("Only Admins have permission to do this action", 403);
    }
    return next();
  };

export default verifyAdminPermission
import { Request, Response, NextFunction } from "express";
import { AppError } from "../error";
import { verify } from "jsonwebtoken";
import "dotenv/config";

const verifyTokenMiddleware = async(
  req: Request,
  res: Response,
  next: NextFunction
): Promise <Response | void> => {
  const authToken = req.headers.authorization;
  
    if (!authToken || authToken.length < 7) {
      throw new AppError("Missing bearer token", 401);
    }
    const token: string = authToken.split(" ")[1];
  
    return verify(
      token,
      String(process.env.SECRET_KEY),
      (error: any, decoded: any) => {
        if (error) {
          throw new AppError(error.message, 401);
        }
  
        req.user = {
          id: parseInt(decoded.sub),
          admin: decoded.admin,
        };
        return next();
      }
    );
};

export default verifyTokenMiddleware;

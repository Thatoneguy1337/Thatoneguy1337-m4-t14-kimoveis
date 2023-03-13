import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { AppError } from "../../error";
import { ILogin } from "../../interfaces/login.interfaces";
import "dotenv/config";
import { Repository } from "typeorm";

const createLoginService = async (payload: ILogin): Promise<string> => {
  const userRepo: Repository<User> = AppDataSource.getRepository(User);

  const user = await userRepo.findOneBy({ email: payload.email });

  if (!user) {
    throw new AppError("Invalid credentials", 401);
  }

  const passwordMatch: boolean = await compare(payload.password, user.password);

  if (!passwordMatch) {
    throw new AppError("Invalid credentials", 401);
  }

  const token: string = sign(
    { admin: user.admin },
    String(process.env.SECRET_KEY),
    { expiresIn: "24h", subject: String(user.id) }
  );

  return token;
};

export default createLoginService;

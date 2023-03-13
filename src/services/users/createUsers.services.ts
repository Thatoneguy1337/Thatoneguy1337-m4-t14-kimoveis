import { hashSync } from "bcryptjs";
import { ICreateUser, IReturnCreateUser } from "../../interfaces/user.interfaces";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { Repository } from "typeorm";
import { returnCreateUserSchema } from "../../schema/users.schema";

const createUserService = async (payload: ICreateUser): Promise<IReturnCreateUser> => {
  const userRepo: Repository<User> = AppDataSource.getRepository(User)

  const hashedPassword = hashSync(payload.password)

  const user: User = userRepo.create({ ...payload, password: hashedPassword })

  await userRepo.save(user)

  const newUser = returnCreateUserSchema.parse(user)

  return newUser
};

export default createUserService;

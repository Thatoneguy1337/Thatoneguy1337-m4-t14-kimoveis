import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { IReturnCreateUser, IUserUpdate } from "../../interfaces/user.interfaces";
import { returnCreateUserSchema, updateUserSchema } from "../../schema/users.schema";

const updateUserService = async (
  payload: IUserUpdate,
  idUser: number
): Promise<IReturnCreateUser> => {
  const userRepo: Repository<User> = AppDataSource.getRepository(User);

  const user = await userRepo.findOneBy({
      id: idUser
  });

  const updateUser = userRepo.create({
      ...user,
      ...payload
  })

  await userRepo.save(updateUser)

  return returnCreateUserSchema.parse(updateUser)
};

export default updateUserService;

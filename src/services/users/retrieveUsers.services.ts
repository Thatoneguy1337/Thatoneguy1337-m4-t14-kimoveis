import { Repository } from "typeorm";
import { User } from "../../entities";
import { AppDataSource } from "../../data-source";
import { IUsersReturn } from "../../interfaces/user.interfaces";
import { returnAllUsersSchema } from "../../schema/users.schema";

const listUsersService = async (): Promise<IUsersReturn> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const users = returnAllUsersSchema.parse(userRepository);

  return users;
};

export default listUsersService;

import { Repository } from "typeorm";
import { User } from "../../entities";
import { AppDataSource } from "../../data-source";
import { IListUsers } from "../../interfaces/user.interfaces";
import { userListSchema} from "../../schema/users.schema";

const listUsersService = async (): Promise<IListUsers> => {

  const userRepository: Repository<User> = AppDataSource.getRepository(User)

  const findUsers: Array<User> = await userRepository.find()

  const users = userListSchema.parse(findUsers)

  return users
}

export default listUsersService;

import { z } from "zod";
import {
  createUserSchema, returnCreateUserSchema, updateUserSchema, userListSchema, userSchema
} from "../schema/users.schema";
import { DeepPartial } from "typeorm";

 type IUser = z.infer<typeof userSchema>

type ICreateUser = z.infer<typeof createUserSchema>

type IReturnCreateUser = z.infer<typeof returnCreateUserSchema>

type IListUsers = z.infer<typeof userListSchema>

type IUserUpdate = DeepPartial<ICreateUser>

export { IUser, ICreateUser, IReturnCreateUser, IUserUpdate,IListUsers };

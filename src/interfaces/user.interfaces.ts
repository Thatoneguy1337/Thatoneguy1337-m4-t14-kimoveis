import { z } from "zod";
import {
  userSchema,
  createUserSchema,
  returnUserSchema,
  userUpdateSchema,
  returnAllUsersSchema,
} from "../schema/users.schema";
import { DeepPartial } from "typeorm";

type IUser = z.infer<typeof createUserSchema>;
type IUserReturn = z.infer<typeof returnUserSchema>;
type IUsersReturn = z.infer<typeof returnAllUsersSchema>;
type IUserUpdate = DeepPartial<IUser>;

export { IUser, IUserReturn, IUsersReturn, IUserUpdate };

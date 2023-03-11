import { z } from "zod";


const userSchema = z.object({
  id: z.number(),
  name: z.string().min(3).max(45),
  email: z.string().email().min(10).max(45),
  admin: z.boolean().default(false),
  password: z.string().min(4).max(20),
});

const createUserSchema = userSchema.omit({
  id: true,
  admin: true,
});

const returnUserSchema = userSchema
  .extend({
    id: z.number(),
    admin: z.boolean(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().nullable(),
  })
  .omit({ password: true });

const userUpdateSchema = userSchema .partial()
.omit({ admin: true });

const returnAllUsersSchema = returnUserSchema.array();

export {
  userSchema,
  createUserSchema,
  returnUserSchema,
  returnAllUsersSchema,
  userUpdateSchema,
};

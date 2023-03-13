import { z } from "zod";

const userSchema = z.object({
  id: z.number().positive().int(),
  name: z.string().max(45),
  email: z.string().email().max(100),
  password: z.string().max(120),
  admin: z.boolean().default(false),
  createdAt: z.string(),
  updatedAt: z.string().nullish(),
  deletedAt: z.string().nullish(),
});

const createUserSchema = userSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
})

const returnCreateUserSchema = userSchema.omit({
  password: true
})

 const userListSchema = returnCreateUserSchema.array()



const updateUserSchema = createUserSchema.partial({
  name: true,
  email: true,
  password: true
}).omit({
  admin:true
})

export {
  userSchema,
  createUserSchema,
  userListSchema,
  returnCreateUserSchema,
  updateUserSchema
};

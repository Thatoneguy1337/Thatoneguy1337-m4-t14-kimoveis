import { z } from "zod";
import { realEstateSchema } from "./real_estate.schema";
import { returnCreateUserSchema, userSchema } from "./users.schema";

const scheduleSchema = z.object({
  id: z.number().int().positive(),
  date: z
    .string()
    .regex(/^\d{4}[-\/]\d{2}[-\/]\d{2}$/)
    .transform((val) => val.replace("-", "/")),
  hour: z.string().regex(/^\d{2}:\d{2}$/),
  realEstate: realEstateSchema,
  user: userSchema,
});

const createScheduleSchema = scheduleSchema
  .omit({
    id: true,
    realEstate: true,
    user: true,
  })
  .extend({
    realEstateId: z.number().int().positive(),
  });

const scheduleSchemaByRealEstate = z.object({
  id: z.number().int().positive(),
  sold: z.boolean(),
  value: z.string(),
  size: z.number(),
  createdAt: z.string(),
  updatedAt: z.string(),
  user: returnCreateUserSchema,
  realEstate: realEstateSchema
  
})

export {createScheduleSchema,scheduleSchema,scheduleSchemaByRealEstate}
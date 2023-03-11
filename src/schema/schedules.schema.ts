import { z } from "zod";
import { returnUserSchema } from "./users.schema";
import {createUserSchema} from "./users.schema";
import {returnRealEstateSchema} from "./real_estate.schema"

const createSchedulesSchema = z.object({
  date: z.string(),
  hour: z.string(),
  realEstateId: z.number(),
});

const schedulesSchemaReturn = createSchedulesSchema.extend({
  id: z.number(),
  userId: z.number(),
});

const schedulesList = z.object({
  date: z.string(),
  hour: z.string(),
  realEstate: createUserSchema,
  user: returnRealEstateSchema,
});

export { createSchedulesSchema, schedulesSchemaReturn, schedulesList };

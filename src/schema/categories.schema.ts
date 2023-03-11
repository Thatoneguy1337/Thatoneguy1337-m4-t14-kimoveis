import { z } from "zod";

const createCategoriesSchema = z.object({
  name: z.string().min(5).max(45),
});

const categoriesSchemaReturn = createCategoriesSchema.extend({
  id: z.number(),
});




export { createCategoriesSchema, categoriesSchemaReturn};

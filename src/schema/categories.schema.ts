import { z } from "zod";

const categoriesSchema = z.object({
  id: z.number().positive(),
  name: z.string().max(45),
});

const createCategoriesSchema = categoriesSchema.omit({
  id: true,
});

export const categoriesListSchema = categoriesSchema.array()


export { categoriesSchema, createCategoriesSchema};

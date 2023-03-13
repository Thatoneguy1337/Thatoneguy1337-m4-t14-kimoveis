import { union, z } from "zod";
import { addressSchema } from "./adresses.schema";
import { categoriesSchema } from "./categories.schema";

const realEstateSchema = z.object({
  id: z.number().positive().int(),
  sold: z.boolean().default(false),
  value: union([z.string(), z.number().positive()]),
  size: z.number().int().positive(),
  createdAt: z.string(),
  updatedAt: z.string(),
  address: addressSchema,
  category: categoriesSchema,
});

const createRealEstateSchema = realEstateSchema.omit({
  id: true,
  address: true,
  category: true,
  createdAt: true,
  updatedAt: true,
}).extend({
  categoryId: z.number(),
  address: z.object({
    street: z.string().max(45),
    zipCode: z.string().max(8),
    number: z.string().max(7).optional(),
    city: z.string().max(20),
    state: z.string().max(2)
  })
})

const returnRealEstateSchema = realEstateSchema;

export { realEstateSchema, createRealEstateSchema, returnRealEstateSchema };

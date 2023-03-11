import { union, z } from "zod";
import { createAdressesSchema, adressSchemaResponse } from "./adresses.schema";
import { createCategoriesSchema,categoriesSchemaReturn} from "./categories.schema";


const createRealEstateSchema = z.object({
  value: z.union([z.number(), z.string()]),
  size: z.number().int().min(1, "Number must be greater than 0"),
  address: createAdressesSchema,
  categoryId: z.number(),
})
const returnRealEstateSchema = createRealEstateSchema
.extend({
  id: z.number(),
  createdAt: z.string(),
  updatedAt: z.string(),
  sold: z.boolean().default(false),
  address: adressSchemaResponse,
  category: categoriesSchemaReturn,
})
.omit({
  categoryId: true,
});

const listRealEstate = returnRealEstateSchema
  .omit({ category: true })
  .array();

const realEstateFromCategory = z.object({
    id: z.number(),
    name: z.string(),
    realEstate: listRealEstate
  })

export {createRealEstateSchema,returnRealEstateSchema,listRealEstate,realEstateFromCategory}
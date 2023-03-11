import {z} from "zod";

import { createCategoriesSchema, categoriesSchemaReturn} from "../schema/categories.schema";


type ICategories = z.infer<typeof createCategoriesSchema>
type ICategoriesReturn = z.infer<typeof categoriesSchemaReturn>


export {ICategories,ICategoriesReturn}





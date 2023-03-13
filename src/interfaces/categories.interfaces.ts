import {z} from "zod";

import { createCategoriesSchema, categoriesSchema} from "../schema/categories.schema";


type ICategories = z.infer<typeof categoriesSchema>
type ICreateCategories = z.infer<typeof createCategoriesSchema>


export {ICategories,ICreateCategories}





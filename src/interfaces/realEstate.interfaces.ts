import {z} from "zod";
import { createRealEstateSchema, realEstateSchema, returnRealEstateSchema } from "../schema/real_estate.schema";

type IRealEstate = z.infer<typeof realEstateSchema>
type ICreateRealEstate = z.infer<typeof createRealEstateSchema>
type IRealEstateReturn = z.infer<typeof returnRealEstateSchema>

export {IRealEstate,IRealEstateReturn,ICreateRealEstate}


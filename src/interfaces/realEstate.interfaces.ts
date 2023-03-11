import {z} from "zod";
import { createRealEstateSchema, returnRealEstateSchema, listRealEstate} from "../schema/real_estate.schema";

type IRealEstate = z.infer<typeof createRealEstateSchema>
type IRealEstateReturn = z.infer<typeof returnRealEstateSchema>
type IRealEstateList = z.infer<typeof listRealEstate>

export {IRealEstate,IRealEstateReturn,IRealEstateList}


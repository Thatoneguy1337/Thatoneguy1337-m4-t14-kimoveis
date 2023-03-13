import {
  ICreateRealEstate,
  IRealEstate,
  IRealEstateReturn,
} from "../../interfaces/realEstate.interfaces";
import { AppDataSource } from "../../data-source";
import { Category, Address, RealEstate } from "../../entities";
import { Repository } from "typeorm";
import { AppError } from "../../error";
import { createAddressSchema } from "../../schema/adresses.schema";
import { createRealEstateSchema, returnRealEstateSchema } from "../../schema/real_estate.schema";


const createRealStateService = async (payload: ICreateRealEstate): Promise<IRealEstateReturn> => {

    const addressRepo: Repository<Address> = AppDataSource.getRepository(Address)
  
    const realEstateRepo: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)
  
    const categoryRepo: Repository<Category> = AppDataSource.getRepository(Category)
  
  if (payload.address.number) {
      
      const addressExists: Address | null = await addressRepo.findOne({
        where:{
            street: payload.address.street,
            number: payload.address.number, 
            city: payload.address.city
        }
      });
    
      if(addressExists){
        throw new AppError(
          "Address already exists",
          409
        );
      }
  }
  
    const newaddress = createAddressSchema.parse(payload.address)
    const address: Address = addressRepo.create(newaddress)
    await addressRepo.save(address)
  
    const category: Category | null = await categoryRepo.findOneBy({
        id: payload.categoryId
  })
  
  if(!category){
      throw new AppError('Category not found', 404)
  }
  
  const { size, value, sold } = createRealEstateSchema.parse(payload)
  
  const realEstate: RealEstate = realEstateRepo.create({
      value: value,
      size: size,
      sold: sold,
      address: address,
      category: category
  })
  
  await realEstateRepo.save(realEstate)
    
  const responseRealEstate = returnRealEstateSchema.parse(realEstate)
  return responseRealEstate
  }
  
  export default createRealStateService;
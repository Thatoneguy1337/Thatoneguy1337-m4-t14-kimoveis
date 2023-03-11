import {
  IRealEstate,
  IRealEstateReturn,
} from "../../interfaces/realEstate.interfaces";
import { AppDataSource } from "../../data-source";
import { Category, Address, RealEstate } from "../../entities";
import { Repository } from "typeorm";
import { returnRealEstateSchema } from "../../schema/real_estate.schema";
import { AppError } from "../../error";

const createRealEstateService = async (
  realEstateData: IRealEstate
): Promise<IRealEstateReturn> => {
  
  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);
  
  const addressRepository: Repository<Address> =
    AppDataSource.getRepository(Address);
  
  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const foundAddress = await addressRepository.findOneBy({
    ...realEstateData.address,
    number: realEstateData.address.number ? realEstateData.address.number : "",
  });

  if (foundAddress) {
    throw new AppError("Address already exists", 409);
  }

  const address: Address = addressRepository.create(realEstateData.address);
  await addressRepository.save(address);

  const foundCat: Category | null = await categoryRepository.findOneBy({
    id: realEstateData.categoryId,
  });

  if (!foundCat) {
    throw new AppError("Category not found", 404);
  }

  const realEstate: RealEstate = realEstateRepository.create({
    ...realEstateData,
    address: address,
    category: foundCat,
  });

  await realEstateRepository.save(realEstate);

  const newRealEstate: IRealEstateReturn =
    returnRealEstateSchema.parse(RealEstate);

  return newRealEstate;
};

export default createRealEstateService;

import { IRealEstateList } from "../../interfaces/realEstate.interfaces";
import { AppDataSource } from "../../data-source";
import { RealEstate } from "../../entities";
import { Repository } from "typeorm";
import { listRealEstate } from "../../schema/real_estate.schema";

const listRealEstateServices = async (): Promise<IRealEstateList> => {
  const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)

  const realEstateList = await realEstateRepository.find({
      relations: {
          address: true,
          category: true
      }
  })

  const realEstateListParsed: IRealEstateList = listRealEstate.parse(realEstateList)

  return realEstateListParsed
};


export default listRealEstateServices
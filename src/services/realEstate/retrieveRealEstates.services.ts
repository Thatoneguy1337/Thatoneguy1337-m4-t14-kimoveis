import { AppDataSource } from "../../data-source";
import { RealEstate } from "../../entities";
import { Repository } from "typeorm";


const listRealEstateServices = async (): Promise<RealEstate[]> => {
  const realEstateRepo: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)

    const findRealEstates: Array<RealEstate> = await realEstateRepo.find({
        relations: {
            address: true
        }
    })



    return findRealEstates
};


export default listRealEstateServices
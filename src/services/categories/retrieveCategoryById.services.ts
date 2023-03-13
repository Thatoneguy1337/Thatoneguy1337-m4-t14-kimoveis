import { FindManyOptions, Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category, RealEstate } from "../../entities";
import { AppError } from "../../error"

export const retrieveCategoryIdService = async (
    categoryId: number
  ): Promise<Category> => {
    const categoryRepo: Repository<Category> = AppDataSource.getRepository(Category)

    const category: Category | null = await categoryRepo.findOne({
        where: {
            id: categoryId
        },
        relations: {
            realEstate: true
        }
    })

    if(!category){
        throw new AppError('Category not found', 404)
    }

    return category
  };


export default retrieveCategoryIdService

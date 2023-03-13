import { Repository } from "typeorm";
import { Category } from "../../entities";
import { AppDataSource } from "../../data-source";
import { categoriesListSchema } from "../../schema/categories.schema";
import { ICategories } from "../../interfaces/categories.interfaces";

const retrieveCategoriesService = async (): Promise<ICategories[]> => {

  const categoryRepo: Repository<Category> = AppDataSource.getRepository(Category)

  const findCategories: Array<ICategories> = await categoryRepo.find()

  const categories = categoriesListSchema.parse(findCategories)

  return categories
}

export default retrieveCategoriesService;

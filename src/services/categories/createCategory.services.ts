import {
  ICategories,
  ICreateCategories,
} from "../../interfaces/categories.interfaces";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { Repository } from "typeorm";
import { categoriesSchema } from "../../schema/categories.schema";

const createCategoriesService = async (
  payload: ICreateCategories
): Promise<ICategories> => {
  const categoryRepo: Repository<Category> =
    AppDataSource.getRepository(Category);

  const category: Category = categoryRepo.create(payload);

  await categoryRepo.save(category);

  const newCategory = categoriesSchema.parse(category);

  return newCategory;
};

export default createCategoriesService;

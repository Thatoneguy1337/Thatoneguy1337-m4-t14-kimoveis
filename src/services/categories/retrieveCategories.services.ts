import { Repository } from "typeorm";
import { Category } from "../../entities";
import { AppDataSource } from "../../data-source";
import { categoriesSchemaReturn  } from "../../schema/categories.schema";
import { ICategoriesReturn } from "../../interfaces/categories.interfaces";

const listCategoryService = async (): Promise<ICategoriesReturn> => {
  const userRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const users = categoriesSchemaReturn .parse(userRepository);

  return users;
};

export default listCategoryService;

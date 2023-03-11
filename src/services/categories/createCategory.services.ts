import {ICategories,ICategoriesReturn} from "../../interfaces/categories.interfaces"
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { Repository } from "typeorm";
import {categoriesSchemaReturn } from "../../schema/categories.schema"

const createCategoriesService = async(categoriesData:ICategories): Promise<ICategoriesReturn> => {

    const categoriesRepository: Repository<Category> = AppDataSource.getRepository(Category);

    const categories: Category = categoriesRepository.create(categoriesData);
  
    await categoriesRepository.save(categories);
  
    const newCategories = categoriesSchemaReturn .parse(categories);
  
    return newCategories;

}

export default createCategoriesService




import { Request, Response } from "express";
import createCategoriesService from "../services/categories/createCategory.services";
import retrieveCategoriesService from "../services/categories/retrieveCategories.services";
import retrieveCategoryIdService from "../services/categories/retrieveCategoryById.services";
import { ICategories,ICreateCategories } from "../interfaces/categories.interfaces";

const createCategoryControllers = async (req: Request, res: Response) => {
  const categoryData: ICreateCategories = req.body;

  const newCategory = await createCategoriesService(categoryData);

  return res.status(201).json(newCategory);
};

const createCategoryIdControllers = async (req: Request, res: Response) => {
  const categoryId: number = parseInt(req.params.id);

  const realEstateByCategory = await retrieveCategoryIdService(categoryId);
  return res.status(200).send(realEstateByCategory);
};

const retrieveCategoriesControllers = async (req: Request, res: Response) => {
  
  const retrieveCategories: Array<ICategories> = await retrieveCategoriesService()

  return res.status(200).json(retrieveCategories)
};

export {
  createCategoryControllers,
  createCategoryIdControllers,
  retrieveCategoriesControllers,
};

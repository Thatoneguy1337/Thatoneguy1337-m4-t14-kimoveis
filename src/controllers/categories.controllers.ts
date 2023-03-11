import { Request, Response } from "express";
import createCategoriesService from "../services/categories/createCategory.services";
import listCategoriesService from "../services/categories/retrieveCategories.services";
import retrieveCategoryIdService from "../services/categories/retrieveCategoryById.services";
import { ICategories } from "../interfaces/categories.interfaces";

const createCategoryControllers = async (req: Request, res: Response) => {
  const categoryData: ICategories = req.body;

  const newCategory = await createCategoriesService(categoryData);

  return res.status(201).json(newCategory);
};

const createCategoryIdControllers = async (req: Request, res: Response) => {
  const categoryId: number = parseInt(req.params.id);

  const realEstateByCategory: any = await retrieveCategoryIdService(categoryId);
  return res.status(200).send(realEstateByCategory);
};

const retrieveCategoriesControllers = async (req: Request, res: Response) => {
  const retrieveCategories = await listCategoriesService();

  return res.json(retrieveCategories);
};

export {
  createCategoryControllers,
  createCategoryIdControllers,
  retrieveCategoriesControllers,
};

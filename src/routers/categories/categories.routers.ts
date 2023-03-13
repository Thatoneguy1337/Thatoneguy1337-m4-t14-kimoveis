import { Router } from "express";
import {
  createCategoryControllers,
  retrieveCategoriesControllers,
  createCategoryIdControllers,
} from "../../controllers/categories.controllers";
import verifyDataMiddleware from "../../middlewares/verifyInputData.middlewares";
import verifyAdminPermission from "../../middlewares/verifyAdmin.middlewares";
import verifyCategoryExist from "../../middlewares/verifyCategoryExists.middlewares";
import verifyTokenMiddleware from "../../middlewares/verifyToken.middlewares";
import { createCategoriesSchema } from "../../schema/categories.schema";

const categoryRouter: Router = Router();

categoryRouter.post(
  "",
  verifyTokenMiddleware,
  verifyAdminPermission,
  verifyDataMiddleware(createCategoriesSchema),
  verifyCategoryExist,
  createCategoryControllers
);
categoryRouter.get("", retrieveCategoriesControllers);
categoryRouter.get("/:id/realEstate", createCategoryIdControllers);

export default categoryRouter;

import { Router } from "express";
import {
  createUserController,
  retrieveUserController,
  updateUserController,
  deleteUserController,
} from "../../controllers/user.controllers";
import verifyAdminPermission from "../../middlewares/verifyAdmin.middlewares";
import verifyPermissionEditUsers from "../../middlewares/verifyEditPermission.middlewares";
import verifyUserExistsMiddleware from "../../middlewares/verifyUserExists.middlewares";
import verifyDataMiddleware from "../../middlewares/verifyInputData.middlewares";
import verifyTokenMiddleware from "../../middlewares/verifyToken.middlewares";
import { createUserSchema,userUpdateSchema } from "../../schema/users.schema";
const userRoutes: Router = Router();

userRoutes.post("", verifyDataMiddleware(createUserSchema),createUserController);
userRoutes.get("",verifyTokenMiddleware, verifyAdminPermission, retrieveUserController);
userRoutes.patch("/:id",verifyDataMiddleware(userUpdateSchema),verifyTokenMiddleware,verifyPermissionEditUsers, verifyUserExistsMiddleware,updateUserController);
userRoutes.delete("/:id",verifyTokenMiddleware,verifyAdminPermission,verifyUserExistsMiddleware, deleteUserController);


export default userRoutes
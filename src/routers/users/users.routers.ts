import { Router } from "express";
import {
  createUserController,
  retrieveUserController,
  updateUserController,
  deleteUserController,
} from "../../controllers/user.controllers";
import verifyAdminPermission from "../../middlewares/verifyAdmin.middlewares";
import verifyPermissionEditUsers from "../../middlewares/verifyEditPermission.middlewares";
import verifyDataMiddleware from "../../middlewares/verifyInputData.middlewares";
import verifyTokenMiddleware from "../../middlewares/verifyToken.middlewares";
import ensureEmailExistsMiddleware from "../../middlewares/verifyEmailExists.middlewares";
import verifyIdUserMiddleWare from "../../middlewares/verifyUserId.middlewares";
import { createUserSchema, updateUserSchema } from "../../schema/users.schema";
const userRoutes: Router = Router();

userRoutes.post(
  "",
  verifyDataMiddleware(createUserSchema),
  ensureEmailExistsMiddleware,
  createUserController
);
userRoutes.get(
  "",
  verifyTokenMiddleware,
  verifyAdminPermission,
  retrieveUserController
);
userRoutes.patch(
  "/:id",
  verifyTokenMiddleware,
  verifyIdUserMiddleWare,
  verifyDataMiddleware(updateUserSchema),
  updateUserController
);
userRoutes.delete(
  "/:id",
  verifyTokenMiddleware,
  verifyIdUserMiddleWare,
  deleteUserController
);


export default userRoutes;

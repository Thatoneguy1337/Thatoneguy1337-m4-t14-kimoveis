import { Router } from "express";
import {
  createScheduleController,
  listSchedulesController,
} from "../../controllers/schedules.controllers";
import verifyTokenMiddleware from "../../middlewares/verifyToken.middlewares";
import verifyDataMiddleware from "../../middlewares/verifyInputData.middlewares";
import verifyAdminPermission from "../../middlewares/verifyAdmin.middlewares";
import { createScheduleSchema } from "../../schema/schedules.schema";

const schedulesRoutes: Router = Router();

schedulesRoutes.post(
  "",
  verifyTokenMiddleware,
  verifyDataMiddleware(createScheduleSchema),
  createScheduleController
);
schedulesRoutes.get(
  "/realEstate/:id",
  verifyTokenMiddleware,
  verifyAdminPermission,
  listSchedulesController
);

export default schedulesRoutes;

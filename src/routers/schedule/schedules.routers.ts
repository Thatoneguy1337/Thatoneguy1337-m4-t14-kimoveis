import { Router } from "express";
import { createScheduleController, listSchedulesController } from "../../controllers/schedules.controllers";
import verifyTokenMiddleware from "../../middlewares/verifyToken.middlewares";
import verifyDataMiddleware from "../../middlewares/verifyInputData.middlewares";
import { createSchedulesSchema} from "../../schema/schedules.schema";


const schedulesRoutes: Router = Router();

schedulesRoutes.post("/", verifyTokenMiddleware, verifyDataMiddleware(createSchedulesSchema), createScheduleController);
schedulesRoutes.get("/realEstate/:id", verifyDataMiddleware, listSchedulesController);


export default schedulesRoutes

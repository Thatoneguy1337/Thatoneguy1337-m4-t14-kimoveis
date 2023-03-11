import { Router } from "express";
import { createLoginController } from "../../controllers/login.controllers";
import { createLoginSchema } from "../../schema/login.schemas";
import verifyDataMiddleware from "../../middlewares/verifyInputData.middlewares";

const loginRoutes:Router = Router();


loginRoutes.post("",verifyDataMiddleware(createLoginSchema),createLoginController);


export default loginRoutes








import express, { Application } from "express";
import { handleErrors } from "./error";
import "express-async-errors";
import userRoutes from "./routers/users/users.routers";
import loginRoutes from "./routers/login/login.routers";
import categoryRoutes from "./routers/categories/categories.routers"
import realEstateRoutes from "./routers/realEstate/realEstate.routers"
import scheduleRouters from "./routers/schedule/schedules.routers"
const app: Application = express();
app.use(express.json());
app.use("/users",userRoutes);
app.use("/login",loginRoutes);
app.use("/categories",categoryRoutes);
app.use("/realEstate",realEstateRoutes);
app.use("/schedules",scheduleRouters)
app.use(handleErrors);

export default app;

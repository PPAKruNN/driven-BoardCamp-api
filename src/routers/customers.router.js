import { Router } from "express";
import getCustomers from "../controllers/getCustomers.js";

const customersRouter = Router();

customersRouter.get("/customers", getCustomers);

export default customersRouter;
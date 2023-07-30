import { Router } from "express";
import getCustomers from "../controllers/getCustomers.js";
import getCustomerById from "../controllers/getCustomerById.js";

const customersRouter = Router();

customersRouter.get("/customers", getCustomers);
customersRouter.get("/customers/:id", getCustomerById);
customersRouter.post("/customers");

export default customersRouter;
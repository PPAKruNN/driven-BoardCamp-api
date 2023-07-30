import { Router } from "express";
import validateSchema from "../middlewares/validateSchema.js"
import getCustomers from "../controllers/getCustomers.js";
import getCustomerById from "../controllers/getCustomerById.js";
import postCustomer from "../controllers/postCustomer.js";
import customerSchema from "../schemas/customerSchema.js";
import putCustomer from "../controllers/putCustomer.js";

const customersRouter = Router();

customersRouter.get("/customers", getCustomers);
customersRouter.get("/customers/:id", getCustomerById);
customersRouter.post("/customers", validateSchema(customerSchema), postCustomer);
customersRouter.put("/customers", validateSchema(customerSchema), putCustomer);


export default customersRouter;
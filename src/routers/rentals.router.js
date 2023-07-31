import { Router } from "express";
import validateSchema from "../middlewares/validateSchema.js"
import getRentals from "../controllers/getRentals.js";
import postRentals from "../controllers/postRentals.js";
import newRentalsSchema from "../schemas/newRentalSchema.js";

const rentalsRouter = Router();

rentalsRouter.get("/rentals", getRentals);
rentalsRouter.post("/rentals",validateSchema(newRentalsSchema), postRentals);

export default rentalsRouter;
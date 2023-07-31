import { Router } from "express";
import validateSchema from "../middlewares/validateSchema.js"
import getRentals from "../controllers/getRentals.js";
import postRentals from "../controllers/postRentals.js";
import newRentalsSchema from "../schemas/newRentalSchema.js";
import returnRental from "../controllers/returnRental.js";
import deleteRental from "../controllers/deleteRental.js";

const rentalsRouter = Router();

rentalsRouter.get("/rentals", getRentals);
rentalsRouter.post("/rentals",validateSchema(newRentalsSchema), postRentals);
rentalsRouter.post("/rentals/:id/return", returnRental);
rentalsRouter.delete("/rentals/:id", deleteRental);

export default rentalsRouter;
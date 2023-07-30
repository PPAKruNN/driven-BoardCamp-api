import { Router } from "express";
import validateSchema from "../middlewares/validateSchema.js"
import rentalsSchema from "../schemas/rentalsSchema.js"
import getRentals from "../controllers/getRentals.js";

const rentalsRouter = Router();

rentalsRouter.get("/rentals", getRentals);

export default rentalsRouter;
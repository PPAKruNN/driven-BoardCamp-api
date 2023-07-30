import { Router } from "express";
import getGames from "../controllers/getGames.js";
import gameSchema from "../schemas/gameSchema.js";
import validateSchema from "../middlewares/validateSchema.js"
import postGames from "../controllers/postGames.js";

const gamesRouter = Router()

gamesRouter.get("/games", getGames);
gamesRouter.post("/games", validateSchema(gameSchema), postGames);

export default gamesRouter;
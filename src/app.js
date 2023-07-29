import Express from "express";
import gamesRouter from "./routers/games.router.js";

const app = Express();
const port = process.env.PORT || 5000;


app.use(Express.json());
app.use(gamesRouter);

app.listen(port);
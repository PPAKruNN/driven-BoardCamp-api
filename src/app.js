import Express from "express";
import gamesRouter from "./routers/games.router.js";
import customersRouter from "./routers/customers.router.js";

const app = Express();
const port = process.env.PORT || 5000;


app.use(Express.json());
app.use(gamesRouter);
app.use(customersRouter);

app.listen(port);
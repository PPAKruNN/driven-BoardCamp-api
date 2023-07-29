import { Express } from "express";

const app = Express();
const port = process.env.PORT || 5000;

app.listen(port);

app.use(Express.cors());
app.use(Express.json());


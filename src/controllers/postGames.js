import { db } from "../database.connection.js";

export default async function(req, res) {

    try {
        const { name, image, stockTotal, pricePerDay} = req.body;

        const result = await db.query("SELECT name FROM games WHERE name = $1", [name]);
        if(result.rowCount !== 0) return res.sendStatus(409);

        await db.query("INSERT INTO games (name, image, \"stockTotal\", \"pricePerDay\") VALUES ($1, $2, $3, $4)",
        [name, image, stockTotal, pricePerDay]);

        return res.sendStatus(201);

    } catch (error) {
        res.send(500); 
    }
}
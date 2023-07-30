import { db } from "../database.connection.js";

export default async function(req, res) {
    try {
        await db.query("SELECT * FROM customers");
        return res.send(search.rows);
    } catch (error) {
        res.sendStatus(500); 
    }
}
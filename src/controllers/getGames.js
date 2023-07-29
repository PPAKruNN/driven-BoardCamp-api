import { db } from "../database.connection.js";

export default async function(req, res) {

    try {
        const search = await db.query("SELECT * FROM games");
        res.send(search.rows);
    } catch (error) {
        res.send(500); 
    }
}
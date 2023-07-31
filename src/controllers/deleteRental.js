import { db } from "../database.connection.js";

export default async function(req, res) {

    try {
        const { id } = req.params; 

        const rentalsSearch = await db.query(`SELECT id, "returnDate" FROM rentals WHERE id = $1`, [id]);
        if(rentalsSearch.rowCount === 0) return res.sendStatus(404);
        if(rentalsSearch.rows[0].returnDate === null) return res.sendStatus(400);

        await db.query(`DELETE FROM rentals WHERE id = $1`, [id]);

        return res.sendStatus(201); 

    } catch (error) {
        return res.sendStatus(500); 
    }
}
import { db } from "../database.connection.js";

export default async function(req, res) {

    const { id } = req.params;

    try {
        const search = await db.query("SELECT id, name, phone, cpf, TO_CHAR(birthday, 'YYYY-MM-DD') as birthday FROM customers WHERE id = $1", [id]);
        if(search.rowCount === 0) return res.sendStatus(404); 

        return res.send(search.rows[0]);
    } catch (error) {
        res.sendStatus(500); 
    }
}
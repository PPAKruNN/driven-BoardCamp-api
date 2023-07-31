import { db } from "../database.connection.js";

export default async function(req, res) {

    try {
        const search = await db.query("SELECT id, name, phone, cpf, TO_CHAR(birthday, 'YYYY-MM-DD') as birthday FROM customers");
        return res.send(search.rows);
    } catch (error) {
        res.sendStatus(500); 
    }
}
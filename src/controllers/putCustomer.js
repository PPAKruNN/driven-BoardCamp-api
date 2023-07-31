import { db } from "../database.connection.js";

export default async function(req,res) {
    const { name, phone, cpf, birthday } = req.body;
    const { id } = req.params;

    try {
        const search = await db.query("SELECT * FROM customers WHERE id = $1", [id]);
        if(search.rowCount === 0) return res.sendStatus(404); 

        const result = await db.query("SELECT * FROM customers WHERE cpf = $1 AND NOT id = $2", [cpf, id]);
        if(result.rowCount !== 0) return res.sendStatus(409);

        await db.query("UPDATE customers SET name=$1, phone=$2, cpf=$3, birthday=$4 WHERE id = $5", 
        [name, phone, cpf, birthday, id]);

        return res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(500); 
    }
}
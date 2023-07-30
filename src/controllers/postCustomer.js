import { db } from "../database.connection.js";

export default async function(req, res) {
   
    const { name, phone, cpf, birthday } = req.body;

    try {
        const result = await db.query("SELECT * FROM customers WHERE cpf = $1", [cpf]);
        if(result.rowCount !== 0) return res.sendStatus(409);

        await db.query("INSERT INTO customers (name, phone, cpf, birthday) VALUES ($1,$2, $3, $4) ", 
        [name, phone, cpf, birthday]);

        return res.sendStatus(201);
    } catch (error) {
        console.log(error);
        res.sendStatus(500); 
    }
}
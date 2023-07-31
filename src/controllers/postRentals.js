import { db } from "../database.connection.js";

export default async function(req, res) {

    try {
        const { customerId, gameId, daysRented } = req.body; 

        const gameSearch = await db.query(`SELECT "stockTotal", "pricePerDay" FROM games WHERE id = $1`, [gameId]);
        if(gameSearch.rowCount === 0) return res.status(400).send("Invalid game");

        const customerSearch = await db.query(`SELECT name FROM customers WHERE id = $1`, [customerId]);
        if(customerSearch.rowCount === 0 ) return res.status(400).send("Invalid customer");
    
        const gamesRented = await db.query(`SELECT * FROM rentals WHERE "returnDate" IS NULL AND "gameId" = $1`,
        [gameId]);
        if(gamesRented.rowCount >= gameSearch.rows[0].stockTotal) return res.status(400).send("Estoque esgotado")
        

        await db.query(`
        INSERT INTO rentals ("customerId", "gameId", "rentDate", "daysRented", "returnDate", "originalPrice", "delayFee") 
        VALUES
        ($1, $2, $3, $4, $5, $6, $7)
        `, [ customerId, gameId, new Date().toUTCString(), daysRented, null, daysRented * gameSearch.rows[0].pricePerDay, null ]);

        return res.sendStatus(201); 

    } catch (error) {
        return res.sendStatus(500); 
    }
}
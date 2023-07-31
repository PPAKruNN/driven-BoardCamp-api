import { db } from "../database.connection.js";

export default async function(req, res) {

    try {
        const search = await db.query(`
        SELECT id, "customerId", "gameId", TO_CHAR(rentals."rentDate", 'YYYY-MM-DD') as "rentDate", "daysRented", "returnDate", "originalPrice", "delayFee",  customers.name AS "customerName", games.name AS "gameName"
          FROM rentals 
          JOIN customers 
            ON rentals."customerId" = customers.id 
          JOIN games
            ON rentals."gameId" = games.id;
    `);

        const response = search.rows.map(r => { 
            const obj = {
                ...r,
                "customer": {
                    id: r.customerId,
                    name: r.customerName
                },
                "game": {
                    id: r.gameId,
                    name: r.gameName
                }
            }
            
            delete obj.gameName;
            delete obj.customerName;

            return obj;
        })

        return res.send(response);
    } catch (error) {
        res.sendStatus(500); 
    }
}
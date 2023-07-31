import dayjs from "dayjs";
import { db } from "../database.connection.js";

export default async function(req, res) {

    try {
        const { id } = req.params; 

        const rentalSearch = await db.query(`SELECT * FROM rentals WHERE id = $1`, [ id ]);

        if(rentalSearch.rowCount === 0) return res.sendStatus(404);

        const rental = rentalSearch.rows[0];

        if(rental.returnDate !== null) return res.status(400).send("Rental already finished");

        let diff = dayjs().diff(dayjs(rental.rentDate), "days") - rental.daysRented;
        if(diff < 0) diff = 0;

        await db.query(`
        UPDATE rentals
           SET "returnDate" = $1, "delayFee" = $2
         WHERE id = $3`, 
         [ new Date().toUTCString(), diff * rental.originalPrice, id ]);

        return res.sendStatus(201); 

    } catch (error) {
        console.log(error);
        return res.sendStatus(500); 
    }
}
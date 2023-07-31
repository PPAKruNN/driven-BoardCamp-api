import Joi from "joi";

const newRentalsSchema = Joi.object({
    "customerId": Joi.number().integer().positive().required(),
    "gameId": Joi.number().integer().positive().required(),
    "daysRented": Joi.number().integer().positive().required(),
}).required();

export default newRentalsSchema;
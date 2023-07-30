// {
//     "id": 1,
//     "customerId": 1,
//     "gameId": 1,
//     "rentDate": '2021-06-20',    // data em que o aluguel foi feito
//     "daysRented": 3,             // por quantos dias o cliente agendou o aluguel
//     "returnDate": null,          // data que o cliente devolveu o jogo (null enquanto não devolvido)
//     "originalPrice": 4500,       // preço total do aluguel em centavos (dias alugados vezes o preço por dia do jogo)
//     "delayFee": null             // multa total paga por atraso (dias que passaram do prazo vezes o preço por dia do jogo)
// }
// 

import Joi from "joi";

const rentalsSchema = Joi.object({
    "customerId": Joi.number().integer().required(),
    "gameId": Joi.number().integer().required(),
    "rentDate": Joi.date().iso().required(),
    "daysRented": Joi.number().integer().required(),
    "returnDate": [ Joi.date().iso().required(), Joi.allow(null) ],
    "originalPrice": Joi.number().integer().required(),
    "delayFee": [ Joi.number().integer().required(), Joi.allow(null) ],
}).required();

export default rentalsSchema;
// {
//     id: 1,
//     name: 'João Alfredo',
//     phone: '21998899222',
//     cpf: '01234567890',
//     birthday: '1992-10-25'
// }
// 

import Joi from "joi";

const customerSchema = Joi.object({
  "name": Joi.string().required(),
  "phone": Joi.string().max(11).pattern(/^[0-9]+$/).required(),
  "cpf": Joi.string().max(11).pattern(/^[0-9]+$/).required(),
  "birthday": Joi.date().required()
}).required();

export default customerSchema
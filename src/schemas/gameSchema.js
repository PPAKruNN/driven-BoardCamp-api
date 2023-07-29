import Joi from "joi"

const gameSchema = Joi.object({
  "name": Joi.string().required(),
  "image": Joi.string().uri().required(),
  "stockTotal": Joi.number().integer().sign("positive").required(),
  "pricePerDay": Joi.number().integer().sign("positive").required()
}).required();

export default gameSchema;
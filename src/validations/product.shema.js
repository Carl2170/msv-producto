const Joi = require("joi");

exports.productSchema = Joi.object({
    name: Joi.string().min(3).required(),
    description: Joi.string().min(3).required(),
    stock: Joi.number().min(0).required(),
    id_category: Joi.number().required(),
    quantity: Joi.number().min(0).required()
});

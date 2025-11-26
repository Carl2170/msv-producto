const Joi = require("joi");

exports.productSchema = Joi.object({
    name: Joi.string().min(3).required(),
    description: Joi.string().min(3).required(),
    id_category: Joi.string().uuid().required(),   // <--- aquí cambia
    stock: Joi.number().min(0).required(),
    price: Joi.number().precision(2).min(0).required(),
});


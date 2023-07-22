import Joi from 'joi';

export const productSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required(),
  stock: Joi.number().required()
});

export const productUpdateSchema = Joi.object({
  name: Joi.string(),
  price: Joi.number(),
  stock: Joi.number()
});
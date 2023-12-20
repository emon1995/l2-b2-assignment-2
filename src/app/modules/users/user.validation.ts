import Joi from 'joi';

const userValidationSchema = Joi.object({
  userId: Joi.string().required().messages({
    'any.required': 'User Id is required',
  }),
  username: Joi.string().required().messages({
    'any.required': 'Username is required',
  }),
  password: Joi.string().required().messages({
    'any.required': 'Password is required',
  }),
  fullName: Joi.object({
    firstName: Joi.string().required().messages({
      'any.required': 'First name is required',
    }),
    lastName: Joi.string().required().messages({
      'any.required': 'Last name is required',
    }),
  }).required(),
  age: Joi.number().required().messages({
    'any.required': 'Age is required',
  }),
  email: Joi.string().email().required().messages({
    'any.required': 'Email is required',
    'string.email': 'Invalid email format',
  }),
  isActive: Joi.boolean().required().messages({
    'any.required': 'isActive is required',
  }),
  hobbies: Joi.array().items(Joi.string()),
  address: Joi.object({
    street: Joi.string(),
    city: Joi.string(),
    country: Joi.string(),
  }),
  orders: Joi.array().items(
    Joi.object({
      productName: Joi.string(),
      price: Joi.number(),
      quantity: Joi.number(),
    }),
  ),
});

export default userValidationSchema;

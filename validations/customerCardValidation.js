const Joi = require('joi');

const validateCustomerCard = (customerCard) => {
  const schema = Joi.object({
    customer_id: Joi.number().required(),
    name: Joi.string().required().min(3).max(100),
    phone: Joi.string().required().min(9),
    number: Joi.string().required(),
    year: Joi.number().required(),
    month: Joi.number().required(),
    is_active: Joi.boolean().required(),
    is_main: Joi.boolean().required(),
  });

  return schema.validate(customerCard);
};

module.exports = { validateCustomerCard };

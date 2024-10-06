const Joi = require('joi');

const validateCustomer = (customer) => {
  const schema = Joi.object({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    phone: Joi.string().required(),
    hashed_password: Joi.string().required(),
    email: Joi.string().required(),
    birth_date: Joi.string().required(),
    gender_id: Joi.number().required(),
    lang_id: Joi.number().required(),
    hashed_refresh_token: Joi.string().required(),
  });

  return schema.validate(customer);
};

module.exports = { validateCustomer };

const Joi = require('joi');

const validateCountry = (country) => {
  const schema = Joi.object({
    country: Joi.string().required().min(3)
  });

  return schema.validate(country);
};

module.exports = { validateCountry };

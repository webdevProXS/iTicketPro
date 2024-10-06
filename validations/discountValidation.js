const Joi = require('joi');

const validateDiscount = (discount) => {
  const schema = Joi.object({
    name: Joi.string().required(),

  });

  return schema.validate(discount);
};

module.exports = { validateDiscount };

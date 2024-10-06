const Joi = require('joi');

const validateCustomerAddress = (customerAddress) => {
  const schema = Joi.object({

    district_id: Joi.number().required(),

  });

  return schema.validate(customerAddress);
};

module.exports = { validateCustomerAddress };

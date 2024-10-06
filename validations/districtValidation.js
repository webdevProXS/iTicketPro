const Joi = require('joi');

const validateDistrict = (district) => {
  const schema = Joi.object({
    name: Joi.string().required().min(3).max(10),
    region_id: Joi.number().required(),
  });

  return schema.validate(district);
};

module.exports = { validateDistrict };

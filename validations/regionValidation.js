const Joi = require('joi');

const validateRegion = (region) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    postpone: Joi.number().required()

  });

  return schema.validate(region);
};

module.exports = { validateRegion};

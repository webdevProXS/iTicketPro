const Joi = require("joi");

const validateSector = (sector) => {
  const schema = Joi.object({
    name: Joi.string().required(),
  });

  return schema.validate(sector);
};

module.exports = { validateSector };

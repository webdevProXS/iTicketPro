const Joi = require('joi');

const validateHumanCategory = (humanCategory) => {
  const schema = Joi.object({
    name: Joi.string().required().min(3),
    start_age: Joi.number().required(),
    finish_age: Joi.number().required(),
    gender_id: Joi.number().required(),

  });

  return schema.validate(humanCategory);
};

module.exports = { validateHumanCategory};

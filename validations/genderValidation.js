const Joi = require('joi');

const validateGender = (gender) => {
  const schema = Joi.object({
    name: Joi.string().required().min(3)

  });

  return schema.validate(gender);
};

module.exports = { validateGender};

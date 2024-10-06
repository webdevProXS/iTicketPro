const Joi = require('joi');

const validateLanguage = (language) => {
  const schema = Joi.object({
    name: Joi.string().required().min(2).max(50),
    description: Joi.string().required().min(5).max(150),

  });

  return schema.validate(language);
};

module.exports = { validateLanguage};

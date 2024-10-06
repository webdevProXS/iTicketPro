const Joi = require('joi');

const validateEventType = (eventType) => {
  const schema = Joi.object({
    name: Joi.string().required().min(3).max(10),
  });

  return schema.validate(eventType);
};

module.exports = { validateEventType };

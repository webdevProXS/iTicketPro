const Joi = require('joi');

const validateSeatType = (seatType) => {
  const schema = Joi.object({
    name: Joi.string().required().min(3)

  });

  return schema.validate(seatType);
};

module.exports = { validateSeatType};

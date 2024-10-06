const Joi = require('joi');

const validateVenueType = (venueType) => {
  const schema = Joi.object({
    name: Joi.string().required()

  });

  return schema.validate(venueType);
};

module.exports = { validateVenueType};

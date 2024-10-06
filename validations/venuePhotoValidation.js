const Joi = require('joi');

const validateVenuePhoto = (venuePhoto) => {
  const schema = Joi.object({
    venue_id: Joi.number().required(),
    url: Joi.string().required(),
  });

  return schema.validate(venuePhoto);
};

module.exports = { validateVenuePhoto};

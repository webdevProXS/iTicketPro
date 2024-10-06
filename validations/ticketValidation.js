const Joi = require('joi');

const validateTicket = (ticket) => {
  const schema = Joi.object({
    event_id: Joi.number().required(),
    seat_id: Joi.number().required(),
    price: Joi.number().required(),
    service_fee: Joi.number().required(),
    status_id: Joi.number().required(),
    ticket_type_id: Joi.number().required(),

  });

  return schema.validate(ticket);
};

module.exports = { validateTicket};

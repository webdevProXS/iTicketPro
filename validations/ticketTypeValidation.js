const Joi = require('joi');

const validateTicketType = (ticketType) => {
  const schema = Joi.object({
    color: Joi.string().required().min(1).max(50),
    name: Joi.string().required().min(3).max(50),
    ticket_id: Joi.number().required(),

  });

  return schema.validate(ticketType);
};

module.exports = { validateTicketType};

const { EventType } = require("../models");
const { validateEventType } = require("../validations/eventTypeValidation");

exports.createEventType = async (req, res) => {
  const { error } = validateEventType(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const event_type = await EventType.create(req.body);
    res.status(201).send(event_type);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getEventType = async (req, res) => {
  try {
    const event_type = await EventType.findAll();
    res.status(200).send(event_type);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getEventTypeById = async (req, res) => {
  try {
    const event_type = await EventType.findByPk(req.params.id);
    if (!event_type) return res.status(404).send("Not found");
    res.status(200).send(event_type);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.updateEventType = async (req, res) => {
  const { error } = validateEventType(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const event_type = await EventType.findByPk(req.params.id);
    if (!event_type) return res.status(404).send("Not found");

    await event_type.update(req.body);
    res.status(200).send(event_type);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.deleteEventType = async (req, res) => {
  try {
    const event_type = await EventType.findByPk(req.params.id);
    if (!event_type) return res.status(404).send("Not found");

    await event_type.destroy();
    res.status(204).send(event_type);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

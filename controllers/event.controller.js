const { Event, Language, Venue } = require("../models");
const { validateEvent } = require("../validations/eventValidation");

exports.createEvent = async (req, res) => {
    const { error } = validateEvent(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    try {
        const event = await Event.create(req.body);
        res.status(201).send(event); // Yangi ob'ekt yaratildi, shuning uchun 201 status kodi.
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.getEvent = async (req, res) => {
    try {
        const events = await Event.findAll();
        res.status(200).send(events);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.getEventById = async (req, res) => {
    try {
        const event = await Event.findByPk(req.params.id, {
            include: [
                {
                    model: Venue,
                    as: "venue"
                },
                {
                    model: Language,
                    as: "language"
                }
            ]
        });
        if (!event) return res.status(404).send("Event not found"); // O'zgaritilgan xato matni
        res.status(200).send(event);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.updateEvent = async (req, res) => {
    const { error } = validateEvent(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    try {
        const event = await Event.findByPk(req.params.id);
        if (!event) return res.status(404).send("Event not found"); // O'zgaritilgan xato matni
        await event.update(req.body);
        res.status(200).send(event);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.deleteEvent = async (req, res) => { // "deletEvent" dan "deleteEvent" ga o'zgartirildi
    try {
        const event = await Event.findByPk(req.params.id);
        if (!event) return res.status(404).send("Event not found"); // O'zgaritilgan xato matni
        await event.destroy();
        res.status(200).send("Event deleted");
    } catch (err) {
        res.status(500).send(err.message);
    }
};

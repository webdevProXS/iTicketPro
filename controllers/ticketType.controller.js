const { TicketType } = require("../models");
const { validateTicketType } = require("../validations/ticketTypeValidation");

exports.createTicketType = async (req, res) => {
    const { error } = validateTicketType(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    try {
        const ticketType = await TicketType.create(req.body);
        res.status(201).send(ticketType); // 201 status kodi - resurs yaratish
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.getTicketType = async (req, res) => {
    try {
        const ticketTypes = await TicketType.findAll(); // TicketTypes o'zgaruvchisi
        res.status(200).send(ticketTypes);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.getTicketTypeById = async (req, res) => {
    try {
        const ticketType = await TicketType.findByPk(req.params.id);
        if (!ticketType) return res.status(404).send("Ticket type not found");
        res.status(200).send(ticketType);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.updateTicketType = async (req, res) => {
    const { error } = validateTicketType(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    try {
        const ticketType = await TicketType.findByPk(req.params.id);
        if (!ticketType) return res.status(404).send("Ticket type not found");
        await ticketType.update(req.body);
        res.status(200).send(ticketType);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.deleteTicketType = async (req, res) => {
    try {
        const ticketType = await TicketType.findByPk(req.params.id);
        if (!ticketType) return res.status(404).send("Ticket type not found");
        await ticketType.destroy();
        res.status(200).send("Ticket type deleted");
    } catch (err) {
        res.status(500).send(err.message);
    }
};

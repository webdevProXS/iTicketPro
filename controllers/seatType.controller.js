const { SeatType } = require("../models");
const { validateSeatType } = require("../validations/seatTypeValidation");

exports.createSeatType = async (req, res) => {
    const { error } = validateSeatType(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    try {
        const seatType = await SeatType.create(req.body);
        res.status(201).send(seatType); // Yangi resurs yaratish uchun 201 status kodi
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.getSeatType = async (req, res) => {
    try {
        const seatTypes = await SeatType.findAll();
        res.status(200).send(seatTypes);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.getSeatTypeById = async (req, res) => {
    try {
        const seatType = await SeatType.findByPk(req.params.id);
        if (!seatType) return res.status(404).send("Seat Type not found");
        res.status(200).send(seatType);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.updateSeatType = async (req, res) => {
    const { error } = validateSeatType(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    try {
        const seatType = await SeatType.findByPk(req.params.id);
        if (!seatType) return res.status(404).send("Seat Type not found");
        await seatType.update(req.body);
        res.status(200).send(seatType);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.deleteSeatType = async (req, res) => {
    try {
        const seatType = await SeatType.findByPk(req.params.id);
        if (!seatType) return res.status(404).send("Seat Type not found");
        await seatType.destroy();
        res.status(200).send("Seat type deleted");
    } catch (err) {
        res.status(500).send(err.message);
    }
};

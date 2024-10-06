const { VenueType } = require("../models");
const { validateVenueType } = require("../validations/venuTypeValidation");

exports.createVenueType = async (req, res) => {
    const { error } = validateVenueType(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    try {
        const venueType = await VenueType.create(req.body);
        res.status(201).send(venueType); // 201 status kodi - resurs yaratish
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.getVenueType = async (req, res) => {
    try {
        const venueTypes = await VenueType.findAll(); // O'zgaruvchi nomini ko'paytirildi
        res.status(200).send(venueTypes);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.getVenueTypeById = async (req, res) => {
    try {
        const venueType = await VenueType.findByPk(req.params.id);
        if (!venueType) return res.status(404).send("Venue type not found");
        res.status(200).send(venueType);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.updateVenueType = async (req, res) => {
    const { error } = validateVenueType(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    try {
        const venueType = await VenueType.findByPk(req.params.id);
        if (!venueType) return res.status(404).send("Venue type not found");
        await venueType.update(req.body);
        res.status(200).send(venueType);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.deleteVenueType = async (req, res) => {
    try {
        const venueType = await VenueType.findByPk(req.params.id);
        if (!venueType) return res.status(404).send("Venue type not found");
        await venueType.destroy();
        res.status(200).send("Venue type deleted");
    } catch (err) {
        res.status(500).send(err.message);
    }
};

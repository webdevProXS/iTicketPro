const { Sector } = require("../models");
const { validateSector } = require("../validations/sectorValidation");

exports.createSector = async (req, res) => {
    const { error } = validateSector(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    try {
        const sector = await Sector.create(req.body);
        res.status(201).send(sector); // Yangi resurs yaratish uchun 201 status kodi
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.getSector = async (req, res) => {
    try {
        const sectors = await Sector.findAll();
        res.status(200).send(sectors);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.getSectorById = async (req, res) => { // 'ById' o'zgartirilgan
    try {
        const sector = await Sector.findByPk(req.params.id);
        if (!sector) return res.status(404).send("Sector not found"); // 404 status kodi
        res.status(200).send(sector);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.updateSector = async (req, res) => {
    const { error } = validateSector(req.body); // Validatsiya qo'shilgan
    if (error) return res.status(400).send(error.details[0].message);
    try {
        const sector = await Sector.findByPk(req.params.id);
        if (!sector) return res.status(404).send("Sector not found"); // 404 status kodi
        await sector.update(req.body);
        res.status(200).send(sector);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.deleteSector = async (req, res) => {
    try {
        const sector = await Sector.findByPk(req.params.id);
        if (!sector) return res.status(404).send("Sector not found"); // 404 status kodi
        await sector.destroy();
        res.status(200).send("Sector deleted");
    } catch (err) {
        res.status(500).send(err.message);
    }
};

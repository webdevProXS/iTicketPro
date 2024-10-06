const { VenuePhoto } = require("../models");
const { validateVenuePhoto } = require("../validations/venuePhotoValidation");

exports.createVenuePhoto = async (req, res) => {
    const { error } = validateVenuePhoto(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    try {
        const venuePhoto = await VenuePhoto.create(req.body);
        res.status(201).send(venuePhoto); // 201 status kodi - resurs yaratish
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.getVenuePhoto = async (req, res) => {
    try {
        const venuePhotos = await VenuePhoto.findAll(); // O'zgaruvchi nomini ko'paytirildi
        res.status(200).send(venuePhotos);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.getVenuePhotoById = async (req, res) => {
    try {
        const venuePhoto = await VenuePhoto.findByPk(req.params.id);
        if (!venuePhoto) return res.status(404).send("Venue Photo not found");
        res.status(200).send(venuePhoto);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.updateVenuePhoto = async (req, res) => {
    const { error } = validateVenuePhoto(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    try {
        const venuePhoto = await VenuePhoto.findByPk(req.params.id);
        if (!venuePhoto) return res.status(404).send("Venue Photo not found");
        await venuePhoto.update(req.body);
        res.status(200).send(venuePhoto);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.deleteVenuePhoto = async (req, res) => {
    try {
        const venuePhoto = await VenuePhoto.findByPk(req.params.id);
        if (!venuePhoto) return res.status(404).send("Venue Photo not found");
        await venuePhoto.destroy();
        res.status(200).send("Venue photo deleted");
    } catch (err) {
        res.status(500).send(err.message);
    }
};

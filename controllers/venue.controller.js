const { Venue, VenueType } = require("../models");
const { validateVenue } = require("../validations/venueValidation");

exports.createVenue = async (req, res) => {
  const { error } = validateVenue(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const venue = await Venue.create(req.body);
    res.status(201).send(venue); // 201 status kodi - resurs yaratish
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getVenue = async (req, res) => {
  try {
    const venues = await Venue.findAll(); // O'zgaruvchi nomini ko'paytirildi
    res.status(200).send(venues);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getVenueById = async (req, res) => {
  try {
    const venue = await Venue.findByPk(req.params.id, {
      include: [
        {
          model: VenueType,
          as: "venueType",
        },
      ],
    });
    if (!venue) return res.status(404).send("Venue not found");
    res.status(200).send(venue);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.updateVenue = async (req, res) => {
  const { error } = validateVenue(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const venue = await Venue.findByPk(req.params.id);
    if (!venue) return res.status(404).send("Venue not found");
    await venue.update(req.body);
    res.status(200).send(venue);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.deleteVenue = async (req, res) => {
  try {
    const venue = await Venue.findByPk(req.params.id);
    if (!venue) return res.status(404).send("Venue not found");
    await venue.destroy();
    res.status(200).send("Venue deleted");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

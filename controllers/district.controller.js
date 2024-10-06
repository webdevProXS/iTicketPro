const { validateDistrict } = require("../validations/districtValidation"); // Validation nomini o'zgartiring
const { District, Region } = require("../models"); // Model nomini o'zgartiring

exports.createDistrict = async (req, res) => {
  const { error } = validateDistrict(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const district = await District.create(req.body); // "Districk" dan "District" ga o'zgartirish
    res.status(201).send(district); // 201 status kodi
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getDistrict = async (req, res) => {
  try {
    const districts = await District.findAll(); // "Districks" dan "Districts" ga o'zgartirish
    res.status(200).send(districts);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getDistrictById = async (req, res) => {
  try {
    const district = await District.findByPk(req.params.id, {
      include: {
        model: Region,
        as: "region"
      }
    });
    if (!district) return res.status(404).send("District not found"); // "Districk" dan "District" ga o'zgartirish
    res.status(200).send(district);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.updateDistrict = async (req, res) => {
  const { error } = validateDistrict(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const district = await District.findByPk(req.params.id);
    if (!district) return res.status(404).send("District not found"); // "Districk" dan "District" ga o'zgartirish
    await district.update(req.body);
    res.status(200).send(district);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.deleteDistrict = async (req, res) => {
  try {
    const district = await District.findByPk(req.params.id);
    if (!district) return res.status(404).send("District not found"); // "Districk" dan "District" ga o'zgartirish
    await district.destroy();
    res.status(200).send("District deleted"); // "Districk" dan "District" ga o'zgartirish
  } catch (err) {
    res.status(500).send(err.message);
  }
};

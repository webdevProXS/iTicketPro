const { HumanCategory, Gender } = require("../models");
const { validateHumanCategory } = require("../validations/humanCategoryValidation");

exports.createHumanCategory = async (req, res) => {
    const { error } = validateHumanCategory(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    try {
        const humanCategory = await HumanCategory.create(req.body);
        res.status(201).send(humanCategory); // 201 status kodi yangi resurs yaratishda ishlatiladi
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.getHumanCategory = async (req, res) => {
    try {
        const humanCategories = await HumanCategory.findAll();
        res.status(200).send(humanCategories);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.getHumanCategoryById = async (req, res) => {
    try {
        const humanCategory = await HumanCategory.findByPk(req.params.id, {
            include: {
                model: Gender,
                as: "gender"
            }
        });
        if (!humanCategory) return res.status(404).send("Human category not found");
        res.status(200).send(humanCategory);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.updateHumanCategory = async (req, res) => {
    const { error } = validateHumanCategory(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    try {
        const humanCategory = await HumanCategory.findByPk(req.params.id);
        if (!humanCategory) return res.status(404).send("Human category not found");
        await humanCategory.update(req.body);
        res.status(200).send(humanCategory);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.deleteHumanCategory = async (req, res) => {
    try {
        const humanCategory = await HumanCategory.findByPk(req.params.id);
        if (!humanCategory) return res.status(404).send("Human category not found");
        await humanCategory.destroy();
        res.status(200).send("Human category deleted");
    } catch (err) {
        res.status(500).send(err.message);
    }
};

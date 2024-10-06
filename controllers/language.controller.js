const { Language } = require("../models");
const { validateLanguage } = require("../validations/languageValidation");

exports.createLanguage = async (req, res) => {
    const { error } = validateLanguage(req.body);
    if (error) return res.status(400).send(error.details[0].message); // 'detail' o'rniga 'details'
    try {
        const language = await Language.create(req.body);
        res.status(201).send(language); // Yangi resurs yaratish uchun 201 status kodi
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.getLanguage = async (req, res) => {
    try {
        const languages = await Language.findAll();
        res.status(200).send(languages);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.getLanguageById = async (req, res) => {
    try {
        const language = await Language.findByPk(req.params.id);
        if (!language) return res.status(404).send("Language not found");
        res.status(200).send(language);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.updateLanguage = async (req, res) => {
    const { error } = validateLanguage(req.body);
    if (error) return res.status(400).send(error.details[0].message); // 'detail' o'rniga 'details'
    try {
        const language = await Language.findByPk(req.params.id);
        if (!language) return res.status(404).send("Language not found");
        await language.update(req.body);
        res.status(200).send(language);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.deleteLanguage = async (req, res) => {
    try {
        const language = await Language.findByPk(req.params.id);
        if (!language) return res.status(404).send("Language not found");
        await language.destroy();
        res.status(200).send("Language deleted");
    } catch (err) {
        res.status(500).send(err.message);
    }
};

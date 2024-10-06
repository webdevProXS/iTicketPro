const { validateDelivery } = require("../validations/deliveryValidation");
const { Delivery } = require("../models");

exports.createDelivery = async (req, res) => {
    const { error } = validateDelivery(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    try {
        const delivery = await Delivery.create(req.body);
        res.status(201).send(delivery); // 201 status code for creation
    } catch (err) {
        res.status(500).send(err.message); // Fixed to err.message
    }
};

exports.getDelivery = async (req, res) => {
    try {
        const deliveries = await Delivery.findAll();
        res.status(200).send(deliveries);
    } catch (err) {
        res.status(500).send(err.message); // Fixed to err.message
    }
};

exports.getDeliveryById = async (req, res) => {
    try {
        const delivery = await Delivery.findByPk(req.params.id);
        if (!delivery) return res.status(404).send("Delivery not found");
        res.status(200).send(delivery);
    } catch (err) {
        res.status(500).send(err.message); // Fixed to err.message
    }
};

exports.updateDelivery = async (req, res) => {
    const { error } = validateDelivery(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    try {
        const delivery = await Delivery.findByPk(req.params.id);
        if (!delivery) return res.status(404).send("Delivery not found");
        await delivery.update(req.body);
        res.status(200).send(delivery);
    } catch (err) {
        res.status(500).send(err.message); // Fixed to err.message
    }
};

exports.deleteDelivery = async (req, res) => {
    try {
        const delivery = await Delivery.findByPk(req.params.id);
        if (!delivery) return res.status(404).send("Delivery not found");
        await delivery.destroy();
        res.status(200).send("Delivery deleted");
    } catch (err) {
        res.status(500).send(err.message); // Fixed to err.message
    }
};

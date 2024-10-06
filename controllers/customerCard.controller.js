const { CustomerCard, Customer } = require("../models");
const { validateCustomerCard } = require("../validations/customerCardValidation");

exports.createCustomerCard = async (req, res) => {
    const { error } = validateCustomerCard(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    try {
        const customerCard = await CustomerCard.create(req.body);
        res.status(201).send(customerCard); // 201 status code for creation
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.getCustomerCard = async (req, res) => {
    try {
        const customerCards = await CustomerCard.findAll();
        res.status(200).send(customerCards);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.getCustomerCardById = async (req, res) => {
    try {
        const customerCard = await CustomerCard.findByPk(req.params.id, {
            include: {
                model: Customer,
                as: "customer"
            }
        });
        if (!customerCard) return res.status(404).send("Customer card not found"); // Fixed message
        res.status(200).send(customerCard);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.updateCustomerCard = async (req, res) => {
    const { error } = validateCustomerCard(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    try {
        const customerCard = await CustomerCard.findByPk(req.params.id);
        if (!customerCard) return res.status(404).send("Customer card not found"); // Fixed message
        await customerCard.update(req.body);
        res.status(200).send(customerCard);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.deleteCustomerCard = async (req, res) => {
    try {
        const customerCard = await CustomerCard.findByPk(req.params.id);
        if (!customerCard) return res.status(404).send("Customer card not found"); // Fixed message
        await customerCard.destroy();
        res.status(200).send("Customer card deleted"); // Updated message for clarity
    } catch (err) {
        res.status(500).send(err.message);
    }
};

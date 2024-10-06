const {
  CustomerAddress,
  Customer,
  Country,
  Region,
  District,
} = require("../models");
const { validateCustomerAddress } = require("../validations/customerAddressValidation");

exports.createCustomerAddress = async (req, res) => {
  const { error } = validateCustomerAddress(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const customerAddress = await CustomerAddress.create(req.body);
    res.status(201).send(customerAddress); // 201 status code for creation
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getCustomerAddress = async (req, res) => {
  try {
    const customerAddress = await CustomerAddress.findAll();
    res.status(200).send(customerAddress);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getCustomerAddressById = async (req, res) => {
  try {
    const customerAddress = await CustomerAddress.findByPk(req.params.id, {
      include: [
        { model: District, as: "district" },
      ],
    });
    if (!customerAddress)
      return res.status(404).send("Customer address not found");
    res.status(200).send(customerAddress);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.updateCustomerAddress = async (req, res) => {
  const { error } = validateCustomerAddress(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const customerAddress = await CustomerAddress.findByPk(req.params.id);
    if (!customerAddress)
      return res.status(404).send("Customer address not found");
    await customerAddress.update(req.body);
    res.status(200).send(customerAddress);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// customerAddressController.js
exports.deleteCustomerAddress = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await CustomerAddress.destroy({ where: { id } });
        
        if (result) {
            return res.status(204).send();
        } else {
            return res.status(404).json({ message: "CustomerAddress not found" });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

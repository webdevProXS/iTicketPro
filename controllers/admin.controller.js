const { validateAdmin, } = require("../validations/adminValidation");
const { Admin } = require("../models/index");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt"); // parolni tekshirish uchun bcrypt

exports.createAdmin = async (req, res) => {
  const { error } = validateAdmin(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const admin = await Admin.create(req.body);
    res.status(201).send(admin);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getAdmins = async (req, res) => {
  try {
    const admins = await Admin.findAll();
    res.status(200).send(admins);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getAdminById = async (req, res) => {
  try {
    const admin = await Admin.findByPk(req.params.id);
    if (!admin) return res.status(404).send("Admin not found");
    res.status(200).send(admin);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.updateAdmin = async (req, res) => {
  const { error } = validateAdmin(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const admin = await Admin.findByPk(req.params.id);
    if (!admin) return res.status(404).send("Admin not found");
    await admin.update(req.body);
    res.status(200).send(admin);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.deleteAdmin = async (req, res) => {
  try {
    const admin = await Admin.findByPk(req.params.id);
    if (!admin) return res.status(404).send("Admin not found");
    await admin.destroy();
    res.status(200).send("Admin deleted");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.Login = async (req, res) => {
  const { error } = ValidationAdminLogin(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const { login, hashed_password } = req.body;
    const admin = await Admin.findOne({ where: { login } });

    if (!admin) return res.status(401).send("Login yoki parol noto'g'ri");

    const validPassword = await bcrypt.compare(
      hashed_password,
      admin.hashed_password
    ); // Parolni tekshirish
    if (!validPassword)
      return res.status(401).send("Login yoki parol noto'g'ri");

    const token = jwt.sign(
      { id: admin.id, login: admin.login },
      "your_secret_key",
      { expiresIn: "1h" }
    );
    res.status(200).send({ token });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const { Router } = require("express")
const router = Router()
const CustomerAddressController = require("../controllers/customerAddress.controller")

/**
 * @swagger
 * tags:
 *   name: CustomerAddress
 *   description: CustomerAddress
 */

/**
 * @swagger
 * /api/customerAddress:
 *   post:
 *     summary: create a new Customer Address
 *     tags: [CustomerAddress]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               district_id:
 *                 type: number
 *     responses:
 *       200:
 *         description: Customer address created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */

router.post("/customerAddress", CustomerAddressController.createCustomerAddress)

/**
 * @swagger
 * /api/customerAddress:
 *   get:
 *     summary: get the customer address
 *     tags: [CustomerAddress]
 *     responses:
 *       200:
 *         description: list of customer Address
 *       500:
 *         description: Server error
 */
router.get("/customerAddress", CustomerAddressController.getCustomerAddress)

/**
 * @swagger
 * /api/customerAddress/{id}:
 *   get:
 *     summary: get the customer address by id
 *     tags: [CustomerAddress]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Customer Address id
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: details of customer address
 *       404:
 *        description: Customer not found
 *       500:
 *         description: Server error
 */

router.get("/customerAddress/:id", CustomerAddressController.getCustomerAddressById)

/**
 * @swagger
 * /api/customerAddress/{id}:
 *   put:
 *     summary: update the customer address by id
 *     tags: [CustomerAddress]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Customer Address id
 *         schema:
 *           type: integer
 *         required: true
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               district_id:
 *                 type: number
 *     responses:
 *       200:
 *         description: Customer Address Updated
 *       404:
 *        description: Customer not found
 *       500:
 *         description: Server error
 */

router.put("/customerAddress/:id", CustomerAddressController.updateCustomerAddress)

/**
 * @swagger
 * /api/customerAddress/{id}:
 *   delete:
 *     summary: delete the customer address by id
 *     tags: [CustomerAddress]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Customer Address id
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: Customer address deleted
 *       404:
 *        description: Customer not found
 *       500:
 *         description: Server error
 */
router.delete('/:id',CustomerAddressController.deleteCustomerAddress);
module.exports = router
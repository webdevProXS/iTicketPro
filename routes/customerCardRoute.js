const { Router } = require("express");
const router = Router();
const customerCardController = require("../controllers/customerCard.controller");

/**
 * @swagger
 * tags:
 *   name: CustomerCard
 *   description: CustomerCard
 */

/**
 * @swagger
 * /api/customerCard:
 *   post:
 *     summary: create a new Customer card
 *     tags: [CustomerCard]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               customer_id:
 *                 type: number
 *               name:
 *                 type: string
 *               phone:
 *                 type: string
 *               number:
 *                 type: string
 *               year:
 *                 type: number
 *               month:
 *                 type: number
 *               is_active:
 *                 type: boolen
 *               is_main:
 *                 type: boolen
 *     responses:
 *       200:
 *         description: Customer Card created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/customerCard", customerCardController.createCustomerCard);

/**
 * @swagger
 * /api/customerCard:
 *   get:
 *     summary: get all the customer card
 *     tags: [CustomerCard]
 *     responses:
 *       200:
 *         description: list of customer cards
 *       500:
 *         description: Server error
 */

router.get("/customerCard", customerCardController.getCustomerCard);
/**
 * @swagger
 * /api/customerCard/{id}:
 *   get:
 *     summary: get the customer card by id
 *     tags: [CustomerCard]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Customer Card ID
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: details of customer card
 *       404:
 *         description: Customer Card not found
 *       500:
 *         description: Server error
 */
router.get("/customerCard/:id", customerCardController.getCustomerCardById);
/**
 * @swagger
 * /api/customerCard/{id}:
 *   put:
 *     summary: get the customer card by id
 *     tags: [CustomerCard]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Customer Card ID
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
 *               customer_id:
 *                 type: number
 *               name:
 *                 type: string
 *               phone:
 *                 type: string
 *               number:
 *                 type: string
 *               year:
 *                 type: number
 *               month:
 *                 type: number
 *               is_active:
 *                 type: boolen
 *               is_main:
 *                 type: boolen
 *     responses:
 *       200:
 *         description: Customer card updated
 *       404:
 *         description: Customer Card not found
 *       500:
 *         description: Server error
 */
router.put("/customerCard/:id", customerCardController.updateCustomerCard);

/**
 * @swagger
 * /api/customerCard/{id}:
 *   delete:
 *     summary: get the customer card by id
 *     tags: [CustomerCard]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Customer Card ID
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: Customer Card deleted
 *       404:
 *         description: Customer Card not found
 *       500:
 *         description: Server error
 */
router.delete("/customerCard/:id", customerCardController.deleteCustomerCard);

module.exports = router;

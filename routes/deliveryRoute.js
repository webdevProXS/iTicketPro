const { Router } = require("express");
const router = Router();
const DeliveryController = require("../controllers/delivery.controller");

/**
 * @swagger
 * tags:
 *   name: Delivery
 *   description: Delivery
 */

/**
 * @swagger
 * /api/delivery:
 *   post:
 *     summary: create a new Delivery
 *     tags: [Delivery]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: Delivery created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 *
 */

router.post("/delivery", DeliveryController.createDelivery);

/**
 * @swagger
 * /api/delivery:
 *   get:
 *     summary: get the all deliveries
 *     tags: [Delivery]
 *     responses:
 *       200:
 *         description: get the deleveries
 *       500:
 *         description: Server error
 */
router.get("/delivery", DeliveryController.getDelivery);

/**
 * @swagger
 * /api/delivery/{id}:
 *   get:
 *     summary: get the delivery by id
 *     tags: [Delivery]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Delivery ID
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: details of Delivery
 *       404:
 *         description: Delivery not found
 *       500:
 *         description: Server error
 */
router.get("/delivery/:id", DeliveryController.getDeliveryById);

/**
 * @swagger
 * /api/delivery/{id}:
 *   put:
 *     summary: update the delivery by id
 *     tags: [Delivery]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Delivery ID
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
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: update the delivery by id
 *       404:
 *         description: Delivery not found
 *       500:
 *         description: Server error
 */
router.put("/delivery/:id", DeliveryController.updateDelivery);

/**
 * @swagger
 * /api/delivery/{id}:
 *   delete:
 *     summary: delete the delivery by id
 *     tags: [Delivery]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Delivery ID
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: Delivery deleted
 *       404:
 *         description: Delivery not found
 *       500:
 *         description: Server error
 */
router.delete("/delivery/:id", DeliveryController.deleteDelivery);

module.exports = router;

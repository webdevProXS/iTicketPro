const {Router} = require("express")
const router = Router()
const PaymentController = require("../controllers/payment.controller")
/**
 * @swagger
 * tags:
 *   name: Payment
 *   description: Payment
 */
/**
 * @swagger
 * /api/payment:
 *   post:
 *     summary: create a new Payment
 *     tags: [Payment]
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
 *         description: create a new payment
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/payment",PaymentController.createPayment)

/**
 * @swagger
 * /api/payment:
 *   get:
 *     summary: get the payment
 *     tags: [Payment]
 *     responses:
 *       200:
 *         description: get the payment
 *       500:
 *         description: Server error
 */
router.get("/payment",PaymentController.getPayment)

/**
 * @swagger
 * /api/payment/{id}:
 *   get:
 *     summary: get the payment
 *     tags: [Payment]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Payment ID
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: get the payment by id
 *       404:
 *         description: Payment not found
 *       500:
 *         description: Server error
 * 
 */
router.get("/payment/:id",PaymentController.getPaymentById)
/**
 * @swagger
 * /api/payment/{id}:
 *   put:
 *     summary: update the payment by id
 *     tags: [Payment]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Payment ID
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
 *         description: update the payment by id
 *       404:
 *         description: Payment not found
 *       500:
 *         description: Server error
 */
router.put("/payment/:id",PaymentController.updatePayment)

/**
 * @swagger
 * /api/payment/{id}:
 *   delete:
 *     summary: delete the payment by id
 *     tags: [Payment]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Payment ID
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: delete the payment
 *       404:
 *         description: Payment not found
 *       500:
 *         description: Server error
 */
router.delete("/payment/:id",PaymentController.deletePayment)

module.exports = router
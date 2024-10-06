const { Router } = require("express");
const router = Router();
const CartController = require("../controllers/cart.controller");

/**
 * @swagger
 * tags:
 *   name: Cart
 *   description: Cart
 */

/**
 * @swagger
 * /api/cart:
 *   post:
 *     summary: Create a new cart
 *     tags: [Cart]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ticket_id:
 *                 type: number
 *               customer_id:
 *                 type: number
 *               finishedAt:
 *                 type: string
 *                 format: date
 *               status_id:
 *                 type: number
 *
 *     responses:
 *       200:
 *         description: Cart created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Serever error
 */

router.post("/cart", CartController.createCart);

/**
 * @swagger
 * /api/cart:
 *   get:
 *     summary: get all the cart
 *     tags: [Cart]
 *     responses:
 *       200:
 *         description: list of carts
 *       500:
 *         description: server error
 */
router.get("/cart", CartController.getCart);

/**
 * @swagger
 * /api/cart/{id}:
 *   get:
 *     summary: get the cart by id
 *     tags: [Cart]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Cart ID
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: cart details
 *       404:
 *         description: cart not found
 *       500:
 *         description: Server error
 */

router.get("/cart/:id", CartController.getByIdCart);

/**
 * @swagger
 * /api/cart/{id}:
 *   put:
 *     summary: Update the cart by id
 *     tags: [Cart]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Cart ID
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
 *               ticket_id:
 *                 type: number
 *               customer_id:
 *                 type: number
 *               finishedAt:
 *                 type: date
 *               status_id:
 *                 type: number
 *     responses:
 *       200:
 *         description: User updated
 *       404:
 *         description: User not found
 *       500:
 *         description: Server error
 */

router.put("/cart/:id", CartController.updateCart);

/**
 * @swagger
 * /api/cart/{id}:
 *   delete:
 *     summary: delete the cart by id
 *     tags: [Cart]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Cart ID
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Cart deleted
 *       500:
 *         description: Server error
 */

router.delete("/cart/:id", CartController.deleteCart);

module.exports = router;

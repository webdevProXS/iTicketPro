const { Router } = require("express");
const router = Router();
const DiscountController = require("../controllers/discount.controller");

/**
 * @swagger
 * tags:
 *   name: Discount
 *   description: Discount
 */

/**
 * @swagger
 * /api/discount:
 *   post:
 *     summary: Create a new discount
 *     tags: [Discount]
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
 *         description: discount created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */

router.post("/discount", DiscountController.createDiscount);

/**
 * @swagger
 * /api/discount:
 *   get:
 *     summary: get the discount
 *     tags: [Discount]
 *     responses:
 *       200:
 *         description: list of discounts
 *       500:
 *         description: Server error
 */
router.get("/discount", DiscountController.getDiscount);
/**
 * @swagger
 * /api/discount/{id}:
 *   get:
 *     summary: get the discount by id
 *     tags: [Discount]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Discount ID
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: details of discount
 *       404:
 *         description: Discount not found
 *       500:
 *         description: Server error
 */
router.get("/discount/:id", DiscountController.getDiscountById);
/**
 * @swagger
 * /api/discount/{id}:
 *   put:
 *     summary: update the discount by id
 *     tags: [Discount]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Discount ID
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
 *         description: discount updated
 *       404:
 *         description: Discount not found
 *       500:
 *         description: Server error
 */
router.put("/discount/:id", DiscountController.updateDiscount);
/**
 * @swagger
 * /api/discount/{id}:
 *   delete:
 *     summary: delete the discount by id
 *     tags: [Discount]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Discount ID
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *        description: Discount deleted
 *       404:
 *         description: Discount not found
 *       500:
 *         description: Server error    
 */
router.delete("/discount/:id", DiscountController.deleteDiscount);

module.exports = router;

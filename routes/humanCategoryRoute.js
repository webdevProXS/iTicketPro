const {Router} = require("express")
const router = Router()
const HumanCategory = require("../controllers/human_category.controller")

/**
 * @swagger
 * tags:
 *   name: HumanCategory
 *   description: Human Category
 */

/**
 * @swagger
 * /api/humanCategory:
 *   post:
 *     summary: create a new human category
 *     tags: [HumanCategory]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               start_age:
 *                 type: number 
 *               finish_age:
 *                 type: number 
 *               gender_id:
 *                 type: number 
 *     responses:
 *       200:
 *         description: Human categoory created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */

router.post("/humanCategory",HumanCategory.createHumanCategory)

/**
 * @swagger
 * /api/humanCategory:
 *   get:
 *     summary: get the human categories
 *     tags: [HumanCategory]
 *     responses:
 *       200:
 *         description: list of human categories
 *       500:
 *         description: Server error
 */
router.get("/humanCategory",HumanCategory.getHumanCategory)

/**
 * @swagger
 * /api/humanCategory/{id}:
 *   get:
 *     summary: get the human category by id
 *     tags: [HumanCategory]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Human Category ID
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: details of human category
 *       404:
 *         description: Human category not found
 *       500:
 *         description: Server error
 */
router.get("/humanCategory/:id",HumanCategory.getHumanCategoryById)
/**
 * @swagger
 * /api/humanCategory/{id}:
 *   put:
 *     summary: update the human category by id
 *     tags: [HumanCategory]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Human Category ID
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
 *               start_age:
 *                 type: number 
 *               finish_age:
 *                 type: number 
 *               gender_id:
 *                 type: number 
 *     responses:
 *       200:
 *         description: Human category updated
 *       404:
 *         description: Human category not found
 *       500:
 *         description: Server error
 */
router.put("/humanCategory/:id",HumanCategory.updateHumanCategory)

/**
 * @swagger
 * /api/humanCategory/{id}:
 *   delete:
 *     summary: delete the human category
 *     tags: [HumanCategory]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Human Category ID
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: Human category updated
 *       404:
 *         description: Human category not found
 *       500:
 *         description: Server error
 */
router.delete("/humanCategory/:id",HumanCategory.deleteHumanCategory)

module.exports = router
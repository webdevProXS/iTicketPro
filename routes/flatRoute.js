const {Router} = require("express")
const router = Router()
const FlatController = require("../controllers/flat.controller")


/**
 * @swagger
 * tags:
 *   name: Flat
 *   description: Flat 
 */

/**
 * @swagger
 * /api/flat:
 *   post:
 *     summary: create a new flat
 *     tags: [Flat]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               etaj:
 *                 type: number
 *               condition:
 *                 type: string
 *     responses:
 *       200:
 *         description: FLat created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */

router.post("/flat",FlatController.createFlat)

/**
 * @swagger
 * /api/flat:
 *   get:
 *     summary: get the flats
 *     tags: [Flat]
 *     responses:
 *       200:
 *         description: list of flat
 *       500:
 *         description: Server error
 */
router.get("/flat",FlatController.getFlat)

/**
 * @swagger
 * /api/flat/{id}:
 *   get:
 *     summary: get the flat by id
 *     tags: [Flat]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: FLat ID
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: deatils of flat
 *       404:
 *         description: Flat not found
 *       500:
 *         description: Server error
 */

router.get("/flat/:id",FlatController.getFlatById)


/**
 * @swagger
 * /api/flat/{id}:
 *   put:
 *     summary: update the flat by id
 *     tags: [Flat]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: FLat ID
 *         schema:
 *           type: integer
 *         required: true
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               etaj:
 *                 type: number
 *               condition:
 *                 type: string
 *     responses:
 *       200:
 *         description: Flat updated
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */

router.put("/flat/:id",FlatController.updateFlat)

/**
 * @swagger
 * /api/flat/{id}:
 *   delete:
 *     summary: delete the flat by id
 *     tags: [Flat]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: FLat ID
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: flat deleted
 *       404:
 *         description: Flat not found
 *       500:
 *         description: Server error
 */

router.delete("/flat/:id",FlatController.deleteFlat)

module.exports = router
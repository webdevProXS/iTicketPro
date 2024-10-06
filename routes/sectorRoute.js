const { Router } = require("express");
const router = Router();
const SectorController = require("../controllers/sector.controller");

/**
 * @swagger
 * tags:
 *   name: Sector
 *   description: Sector Management API
 */

/**
 * @swagger
 * /api/sector:
 *   post:
 *      summary: Post a new sector
 *      tags: [Sector]
 *      description: Create a new sector with the provided details
 *      requestBody:
 *         required: true
 *         content:
 *            application/json:
 *                 schema:
 *                    type: object
 *                    properties:
 *                        name:
 *                           type: string
 *      responses:
 *        '201':
 *          description: Created successfully
 *        '500':
 *          description: Internal server error
 */
router.post("/sector", SectorController.createSector);

/**
 * @swagger
 * /api/sector:
 *   get:
 *     summary: Get all sectors
 *     tags: [Sector]
 *     description: Retrieves a list of sector
 *     responses:
 *        '200':
 *           description: A successful response with a list of sector
 *        '500':
 *           description: Internal server error
 */
router.get("/sector", SectorController.getSector);  

/**
 * @swagger
 * /api/sector/{id}:
 *   get:
 *     summary: Get sector by ID
 *     tags: [Sector]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Sector ID
 *         schema:
 *           type: integer
 *         required: true
 *         example: 1
 *     responses:
 *       200:
 *         description: Details of the sector
 *       404:
 *         description: Sector not found
 *       500:
 *         description: Server error
 */
router.get("/sector/:id", SectorController.getSectorById);

/**
 * @swagger
 * /api/sector/{id}:
 *   put:
 *     summary: Update a sector
 *     tags: [Sector]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Sector ID
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
 *                 description: Name of the sector
 *                 example: "Updated Sector Name"
 *     responses:
 *       200:
 *         description: Sector updated successfully
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Sector not found
 *       500:
 *         description: Server error
 */
router.put("/sector/:id", SectorController.updateSector);

/**
 * @swagger
 * /api/sector/{id}:
 *   delete:
 *     summary: Delete a sector by ID
 *     tags: [Sector]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Sector ID
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: Sector deleted successfully
 *       404:
 *         description: Sector not found
 *       500:
 *         description: Server error
 */
router.delete("/sector/:id", SectorController.deleteSector);

module.exports = router;

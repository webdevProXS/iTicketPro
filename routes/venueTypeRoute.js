const {Router} = require("express")
const router = Router()
const VenueTypeController = require("../controllers/venueType.controller")

/**
 * @swagger
 * tags:
 *   name: VenueType
 *   description: VenueType
 */

/**
 * @swagger
 * /api/venueType:
 *   post:
 *     summary: create a new venueType
 *     tags: [VenueType]
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
 *         description: VenueType created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/venueType",VenueTypeController.createVenueType)
/**
 * @swagger
 * /api/venueType:
 *   get:
 *     summary: get the venue type
 *     tags: [VenueType]
 *     responses:
 *       200:
 *         description: list of venue type
 *       500:
 *         descritpion: Server error
 */
router.get("/venueType",VenueTypeController.getVenueType)
/**
 * @swagger
 * /api/venueType/{id}:
 *   get:
 *     summary: get the venue type
 *     tags: [VenueType]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Venue type ID
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: list of venue type
 *       404:
 *         description: Venue type not found
 *       500:
 *         descritpion: Server error
 */
router.get("/venueType/:id",VenueTypeController.getVenueTypeById)
/**
 * @swagger
 * /api/venueType/{id}:
 *   put:
 *     summary: update the venue type
 *     tags: [VenueType]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Venue type ID
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
 *         description: Venue Type updated
 *       404:
 *         description: Venue type not found
 *       500:
 *         descritpion: Server error
 */
router.put("/venueType/:id",VenueTypeController.updateVenueType)
/**
 * @swagger
 * /api/venueType/{id}:
 *   delete:
 *     summary: delete the venueType
 *     tags: [VenueType]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Venue type ID
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: Venue Type deleted
 *       404:
 *         description: Venue type not found
 *       500:
 *         descritpion: Server error
 */
router.delete("/venueType/:id",VenueTypeController.deleteVenueType)

module.exports = router
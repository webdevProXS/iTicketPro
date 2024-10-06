const {Router} = require("express")
const router = Router()
const VenueController = require("../controllers/venue.controller")

/**
 * @swagger
 * tags:
 *   name: Venue
 *   description: Venue
 */

/**
 * @swagger
 * /api/venue:
 *   post:
 *     summary: create a new venue
 *     tags: [Venue]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               address:
 *                 type: string
 *               location:
 *                 type: string
 *               site:
 *                 type: string
 *               phone:
 *                 type: string
 *               venue_type_id:
 *                 type: number
 *               schema:
 *                 type: string
 *               region_id:
 *                 type: number
 *               district_id:
 *                 type: number
 *     responses:
 *       200:
 *         description: Venue created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */

router.post("/venue",VenueController.createVenue)
/**
 * @swagger
 * /api/venue:
 *   get:
 *     summary: get the venue
 *     tags: [Venue]
 *     responses:
 *       200:
 *         description: list of venue
 *       500:
 *         description: Server error
 */
router.get("/venue",VenueController.getVenue)
/**
 * @swagger
 * /api/venue/{id}:
 *   get:
 *     summary: get the venue by id
 *     tags: [Venue]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Venue ID
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: details of venue
 *       404:
 *         description: Venue not found
 *       500:
 *         description: Server error
 */
router.get("/venue/:id",VenueController.getVenueById)
/**
 * @swagger
 * /api/venue/{id}:
 *   put:
 *     summary: update the venue
 *     tags: [Venue]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Venue ID
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
 *               address:
 *                 type: string
 *               location:
 *                 type: string
 *               site:
 *                 type: string
 *               phone:
 *                 type: string
 *               venue_type_id:
 *                 type: number
 *               schema:
 *                 type: string
 *               region_id:
 *                 type: number
 *               district_id:
 *                 type: number
 *     responses:
 *       200:
 *         description: Venue update
 *       404:
 *         description: Venue not found
 *       500:
 *         description: Server error
 */
router.put("/venue/:id",VenueController.updateVenue)
/**
 * @swagger
 * /api/venue/{id}:
 *   delete:
 *     summary: delete the venue by id
 *     tags: [Venue]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Venue ID
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: Venue deleted
 *       404:
 *         description: Venue not found
 *       500:
 *         description: Server error
 */
router.delete("/venue/:id",VenueController.deleteVenue)

module.exports = router
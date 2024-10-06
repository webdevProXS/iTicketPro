const {Router} = require("express")
const router = Router()
const venuePhotoController = require("../controllers/venuePhoto.controller")

/**
 * @swagger
 * tags:
 *   name: VenuePhoto
 *   description: VenuePhoto
 */

/**
 * @swagger
 * /api/venuePhoto:
 *   post:
 *     summary: create a new venue photo
 *     tags: [VenuePhoto]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               venue_id:
 *                 type: number
 *               url:
 *                  type: string
 *     responses:
 *       200:
 *         description: Venue Photo created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/venuePhoto",venuePhotoController.createVenuePhoto)
/**
 * @swagger
 * /api/venuePhoto:
 *   get:
 *     summary: get the venue photo
 *     tags: [VenuePhoto]
 *     responses:
 *       200:
 *         description: list of venue photo
 *       500:
 *         description: Server error
 */
router.get("/venuePhoto",venuePhotoController.getVenuePhoto)
/**
 * @swagger
 * /api/venuePhoto/{id}:
 *   get:
 *     summary: get the venue photo by id
 *     tags: [VenuePhoto]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Venue Type ID
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: details of venue photo
 *       404:
 *         description: Venue photo not found
 *       500:
 *         description: Server error
 */
router.get("/venuePhoto/:id",venuePhotoController.getVenuePhotoById)
/**
 * @swagger
 * /api/venuePhoto/{id}:
 *   put:
 *     summary: update the venue photo
 *     tags: [VenuePhoto]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Venue Type ID
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
 *               venue_id:
 *                 type: number
 *               url:
 *                  type: string
 *     responses:
 *       200:
 *         description: Venue photo updated
 *       404:
 *         description: Venue photo not found
 *       500:
 *         description: Server error
 */
router.put("/venuePhoto/:id",venuePhotoController.updateVenuePhoto)
/**
 * @swagger
 * /api/venuePhoto/{id}:
 *   delete:
 *     summary: delete the venue photo
 *     tags: [VenuePhoto]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Venue Type ID
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: Venue photo deleted
 *       404:
 *         description: Venue photo not found
 *       500:
 *         description: Server error
 */
router.delete("/venuePhoto/:id",venuePhotoController.deleteVenuePhoto)

module.exports = router
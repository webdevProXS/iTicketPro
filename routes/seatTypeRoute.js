const {Router} = require("express")
const router = Router()
const SeatTypeController = require("../controllers/seatType.controller")

/**
 * @swagger
 * tags:
 *   name: SeatType
 *   description: SeatType
 */

/**
 * @swagger
 * /api/seatType:
 *   post:
 *     summary: create a new seat type
 *     tags: [SeatType]
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
 *         description: SeatType created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/seatType",SeatTypeController.createSeatType)

/**
 * @swagger
 * /api/seatType:
 *   get:
 *     summary: get the seat Type
 *     tags: [SeatType]
 *     responses:
 *       200:
 *         description: list of seat type
 *       500:
 *         description: Server error
 */
router.get("/seatType",SeatTypeController.getSeatType)

/**
 * @swagger
 * /api/seatType/{id}:
 *   get:
 *     summary: get the seat type by id
 *     tags: [SeatType]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Seat Type ID
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: details of seat type
 *       404:
 *         description: Seat Type not found
 *       500:
 *         description: Server error
 */
router.get("/seatType/:id",SeatTypeController.getSeatTypeById)
/**
 * @swagger
 * /api/seatType/{id}:
 *   put:
 *     summary: update the seat type by id
 *     tags: [SeatType]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Seat Type ID
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
 *         description: Seat type updated
 *       404:
 *         description: Seat Type not found
 *       500:
 *         description: Server error
 */
router.put("/seatType/:id",SeatTypeController.updateSeatType)

/**
 * @swagger
 * /api/seatType/{id}:
 *   delete:
 *     summary: delete the seat type by id
 *     tags: [SeatType]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Seat Type ID
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: Seat type deleted
 *       404:
 *         description: Seat Type not found
 *       500:
 *         description: Server error
 */
router.delete("/seatType/:id",SeatTypeController.deleteSeatType)

module.exports = router
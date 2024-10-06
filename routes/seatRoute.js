const {Router} = require("express")
const router = Router()
const SeatController = require("../controllers/seat.controller")

/**
 * @swagger
 * tags:
 *   name: Seat
 *   description: Seat
 */

/**
 * @swagger
 * /api/seat:
 *   post:
 *     summary: create a new seat
 *     tags: [Seat]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sector_id:
 *                 type: number
 *               row_number:
 *                 type: number
 *               number:
 *                 type: number
 *               venue_id:
 *                 type: number
 *               seat_type_id:
 *                 type: number
 *               location_in_schema:
 *                 type: string
 *     responses:
 *       200:
 *         description: Seat created 
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/seat",SeatController.createSeat)

/**
 * @swagger
 * /api/seat:
 *   get:
 *     summary: get the seats
 *     tags: [Seat]
 *     responses:
 *       200:
 *         description: get the seat
 *       500:
 *         description: Server error  
 */
router.get("/seat",SeatController.getSeat)

/**
 * @swagger
 * /api/seat/{id}:
 *   get:
 *     summary: get the seat by id
 *     tags: [Seat]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Seat ID
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: details of seat
 *       404:
 *         description: Seat not found
 *       500:
 *         description: Server error  
 */
router.get("/seat/:id",SeatController.getSeatById)

/**
 * @swagger
 * /api/seat/{id}:
 *   put:
 *     summary: update the seat
 *     tags: [Seat]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Seat ID
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
 *               sector_id:
 *                 type: number
 *               row_number:
 *                 type: number
 *               number:
 *                 type: number
 *               venue_id:
 *                 type: number
 *               seat_type_id:
 *                 type: number
 *               location_in_schema:
 *                 type: string
 *     responses:
 *       200:
 *         description: Seat updated
 *       404:
 *         description: Seat not found
 *       500:
 *         description: Server error     
 */
router.put("/seat/:id",SeatController.updateSeat)

/**
 * @swagger
 * /api/seat/{id}:
 *   delete:
 *     sumamry: delete the seat
 *     tags: [Seat]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Seat ID
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: Seat deleted
 *       404:
 *         description: Seat not found
 *       500:
 *         description: Server error
 */
router.delete("/seat/:id",SeatController.deleteSeat)


module.exports = router
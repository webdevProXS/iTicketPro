const {Router} = require("express")
const router = Router()
const BookingController = require("../controllers/booking.controller")

/**
 * @swagger
 * tags:
 *   name: Booking
 *   description: Booking
 */

/**
 * @swagger
 * /api/book:
 *   post:
 *     summary: create a new Book
 *     tags: [Booking]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cart_id:
 *                 type: number
 *               finished:
 *                 type: date
 *               payment_method_id:
 *                 type: number
 *               delivery_method_id:
 *                 type: number 
 *               discount_method_id:
 *                 type: number   
 *               status_id:
 *                 type: number         
 *     responses:
 *       200:
 *         description: Booking created
 *       500:
 *         description: Server error              
 */
router.post("/book",BookingController.createBooking)

/**
 * @swagger
 * /api/book:
 *   get:
 *     summary: get the all booking
 *     tags: [Booking]
 *     responses:
 *       200:   
 *         description: list of booking
 *       500:
 *         description: Server error
 */

router.get("/book",BookingController.getBooking)

/**
 * @swagger
 * /api/book/{id}:
 *   get:
 *     summary: get the booking by id
 *     tags: [Booking]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Booking Id
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: booking details
 *       404:
 *         description: not found
 *       500:
 *         description: Server error
 */

router.get("/book/:id",BookingController.getByIdBooking)

/**
 * @swagger
 * /api/book/{id}:
 *   put: 
 *     summary: update the book by id
 *     tags: [Booking]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Booking ID
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cart_id:
 *                 type: number
 *               finished:
 *                 type: date
 *               payment_method_id:
 *                 type: number
 *               delivery_method_id:
 *                 type: number 
 *               discount_method_id:
 *                 type: number   
 *               status_id:
 *                 type: number   
 *     responses:
 *       200:
 *         description: Booking updated
 *       404:
 *         description: Booking not found
 *       500:
 *         description: Server error   
 */
router.put("/book/:id",BookingController.updateBooking)

/**
 * @swagger
 * /api/book/{id}:
 *   delete:
 *     summary: Delete the book by id
 *     tags: [Booking]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Booking ID
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Booking deleted
 *       404:
 *         description: Booking not found
 *       500:
 *         description: Server error 
 */

router.delete("/book/:id",BookingController.deleteBooking)

module.exports = router
const { Router } = require("express")
const router = Router()
const TicketTypeController = require("../controllers/ticketType.controller")
/**
 * @swagger
 * tags:
 *   name: TicketType
 *   description: TicketType
 */

/**
 * @swagger
 * /api/ticketType:
 *   post:
 *     summary: create a new ticket type
 *     tags: [TicketType]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                color:
 *                  type: string
 *                name:
 *                  type: string
 *                ticket_id:
 *                  type: number
 *     responses:
 *       200:
 *         description: Ticket type created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/ticketType", TicketTypeController.createTicketType)
/**
 * @swagger
 * /api/ticketType:
 *   get:
 *     summary: get the ticket type
 *     tags: [TicketType]
 *     responses:
 *       200:
 *         description: list of ticket type
 *       500:
 *         description: Server error
 */
router.get("/ticketType", TicketTypeController.getTicketType)
/**
 * @swagger
 * /api/ticketType/{id}:
 *   get:
 *     summary: get the ticket type by id
 *     tags: [TicketType]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Ticket Type ID
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: details of ticket type
 *       404:
 *         description: Ticket type not found
 *       500:
 *         description: Server error
 */
router.get("/ticketType/:id", TicketTypeController.getTicketTypeById)
/**
 * @swagger
 * /api/ticketType/{id}:
 *   put:
 *     summary: update the ticket type by id
 *     tags: [TicketType]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Ticket Type ID
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
 *                color:
 *                  type: string
 *                name:
 *                  type: string
 *                ticket_id:
 *                  type: number
 *     responses:
 *       200:
 *         description: ticket type updated
 *       404:
 *         description: Ticket type not found
 *       500:
 *         description: Server error
 */
router.put("/ticketType/:id", TicketTypeController.updateTicketType)
/**
 * @swagger
 * /api/ticketType/{id}:
 *   delete:
 *     summary: delete the ticket type by id
 *     tags: [TicketType]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Ticket Type ID
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: ticket type deleted
 *       404:
 *         description: Ticket type not found
 *       500:
 *         description: Server error
 */
router.delete("/ticketType/:id", TicketTypeController.deleteTicketType)

module.exports = router
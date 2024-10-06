const {Router} = require("express")
const router = Router()
const TicketController = require("../controllers/ticket.controller")

/**
 * @swagger
 * tags:
 *   name: Ticket
 *   description: Ticket
 */
/**
 * @swagger
 * /api/ticket:
 *   post:
 *     summary: create a new ticket
 *     tags: [Ticket] 
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               event_id:
 *                 type: number
 *               seat_id:
 *                 type: number
 *               price:
 *                 type: number
 *               service_fee:
 *                 type: number
 *               status_id:
 *                 type: number
 *               ticket_type_id:
 *                 type: number
 *     responses:
 *       200:
 *         description: Ticket created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/ticket",TicketController.createTicket)
/**
 * @swagger
 * /api/ticket:
 *   get:
 *     summary: get the ticket
 *     tags: [Ticket]
 *     responses:
 *       200:
 *         description: list of ticket
 *       500:
 *         description: Server error
 */
router.get("/ticket",TicketController.getTicket)
/**
 * @swagger
 * /api/ticket/{id}:
 *   get:
 *     summary: get the ticket by id
 *     tags: [Ticket]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Ticket ID
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: details of ticket
 *       404:
 *          description: Ticket not found
 *       500:
 *          description: Server error
 */
router.get("/ticket/:id",TicketController.getTicketById)
/**
 * @swagger
 * /api/ticket/{id}:
 *   put:
 *     summary: update the ticket
 *     tags: [Ticket]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Ticket ID
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
 *               event_id:
 *                 type: number
 *               seat_id:
 *                 type: number
 *               price:
 *                 type: number
 *               service_fee:
 *                 type: number
 *               status_id:
 *                 type: number
 *               ticket_type_id:
 *                 type: number
 *     responses:
 *       200:
 *         description: Ticket updated
 *       404:
 *         description: Ticket not found
 *       500:
 *         description: Server error
 *  
 */
router.put('/ticket/:id', TicketController.updateTicket); 

/**
 * @swagger
 * /api/ticket/{id}:
 *   delete:
 *     summary: delete the ticket
 *     tags: [Ticket]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Ticket ID
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: Ticket deleted
 *       404:
 *         description: Ticket not found
 *       500:
 *         description: Server error
 */
router.delete("/ticket/:id",TicketController.deleteTicket)

module.exports = router
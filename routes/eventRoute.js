const {Router} = require("express")
const router = Router()
const EventController = require("../controllers/event.controller")

/**
 * @swagger
 * tags:
 *   name: Event
 *   description: Event
 */
/**
 * @swagger
 * /api/event:
 *   post:
 *     summary: create a new event
 *     tags: [Event]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               photo:
 *                 type: string
 *               finish_date:
 *                 type: string
 *                 format: date
 *               info:
 *                 type: string
 *               event_type_id:
 *                 type: number
 *               human_category_id:
 *                 type: number
 *               venue_id:
 *                 type: number
 *               language_id:
 *                 type: number
 *               release_date:
 *                 type: string
 *                 format: date
 *     responses:
 *       200:
 *         description: Event created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/event",EventController.createEvent)

/**
 * @swagger
 * /api/event:
 *   get:
 *     summary: get the Event
 *     tags: [Event]
 *     responses:
 *       200:
 *         description: list of Events
 *       500:
 *         description: Server error
 */
router.get("/event",EventController.getEvent)

/**
 * @swagger
 * /api/event/{id}:
 *   get:
 *     summary: get the event by id
 *     tags: [Event]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Event ID
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: details of event
 *       404:
 *         description: Event not found
 *       500:
 *         description: Server error
 *    
 */

router.get("/event/:id",EventController.getEventById)

/**
 * @swagger
 * /api/event/{id}:
 *   put:
 *     summary: update the event
 *     tags: [Event]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Event ID
 *         schema:
 *           type: integer
 *         required: true
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               photo:
 *                 type: string
 *               finish_date:
 *                 type: string
 *               info:
 *                 type: string
 *               event_type_id:
 *                 type: number
 *               human_category_id:
 *                 type: number
 *               venue_id:
 *                 type: number
 *               language_id:
 *                 type: number
 *               release_date:
 *                 type: string 
 *     responses:
 *       200:
 *         description: details of event
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.put("/event/:id",EventController.updateEvent)

/**
 * @swagger
 * /api/event/{id}:
 *   delete:
 *     summary: delete the event by id
 *     tags: [Event]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Event ID
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: Event deleted
 *       404:
 *         description: Event not found
 *       500:
 *         description: Server error
 *    
 */

router.delete('/event/:id', EventController.deleteEvent);


module.exports = router
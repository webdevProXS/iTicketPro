const { Router } = require("express");
const router = Router();
const EventTypeController = require("../controllers/eventType.controller");

/**
 * @swagger
 * tags:
 *   name: EventType
 *   description: EventType
 */
/**
 * @swagger
 * /api/eventType:
 *   post:
 *     summary: create a new EventType
 *     tags: [EventType]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: EventType created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/eventType", EventTypeController.createEventType);

/**
 * @swagger
 * /api/eventType:
 *   get:
 *     summary: get the EventType
 *     tags: [EventType]
 *     responses:
 *       200:
 *         description: list of EventType
 *       500:
 *         description: Server error
 */
router.get("/eventType", EventTypeController.getEventType);

/**
 * @swagger
 * /api/eventType/{id}:
 *   get:
 *     summary: get the EventType by id
 *     tags: [EventType]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: EventType ID
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

router.get("/eventType/:id", EventTypeController.getEventTypeById);

/**
 * @swagger
 * /api/eventType/{id}:
 *   put:
 *     summary: update the EventType
 *     tags: [EventType]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: EventType ID
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
 *     responses:
 *       200:
 *         description: details of EventType
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.put("/eventType/:id", EventTypeController.updateEventType);

/**
 * @swagger
 * /api/eventType/{id}:
 *   delete:
 *     summary: delete the EventType by id
 *     tags: [EventType]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: EventType ID
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: EventType deleted
 *       404:
 *         description: EventType not found
 *       500:
 *         description: Server error
 *
 */

router.delete("/eventType/:id", EventTypeController.deleteEventType);

module.exports = router;

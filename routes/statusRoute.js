const { Router } = require("express")
const router = Router()
const StatusController = require("../controllers/status.controller")

/**
 * @swagger
 * tags:
 *   name: Status
 *   description: Status
 */

/**
 * @swagger
 * /api/status:
 *   post:
 *     summary: create a new status
 *     tags: [Status]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *     responses:
 *       200:
 *         description: Status created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/status",StatusController.createStatus)
/**
 * @swagger
 * /api/status:
 *   get:
 *     summary: get the status
 *     tags: [Status]
 *     responses:
 *       200:
 *         descrirption: list of status
 *       500:
 *         description: Server error
 */
router.get("/status",StatusController.getStatus)
/**
 * @swagger
 * /api/status/{id}:
 *   get:
 *     summary: get the status by id
 *     tags: [Status]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Status ID
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: details of status
 *       404:
 *         description: Status not found
 *       500:
 *         description: Server error
 */
router.get("/status/:id",StatusController.getStatusById)
/**
 * @swagger
 * /api/status/{id}:
 *   put:
 *     summary: update the status by id
 *     tags: [Status]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Status ID
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
 *               status:
 *                 type: string
 *     responses:
 *       200:
 *         description: Status updated
 *       404:
 *         description: Status not found
 *       500:
 *         description: Server error
 */
router.put("/status/:id",StatusController.updateStatus)
/**
 * @swagger
 * /api/status/{id}:
 *   delete:
 *     summary: delete the status
 *     tags: [Status]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Status ID
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: Status deleted
 *       404:
 *         description: Status not found
 *       500:
 *         description: Server error 
 */
router.delete("/status/:id",StatusController.deleteStatus)

module.exports = router
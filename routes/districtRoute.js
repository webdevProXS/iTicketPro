const { Router } = require("express");
const router = Router();
const DistrictController = require("../controllers/district.controller");

/**
 * @swagger
 * tags:
 *   name: District
 *   description: District
 */
/**
 * @swagger
 * /api/district:
 *   post:
 *     summary: create a new District
 *     tags: [District]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               region_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: District created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */

router.post("/district", DistrictController.createDistrict);
/**
 * @swagger
 * /api/district:
 *   get:
 *     summary: get the district
 *     tags: [District]
 *     responses:
 *       200:
 *         description: District created
 *       500:
 *         description: Server error
 */
router.get("/district", DistrictController.getDistrict);

/**
 * @swagger
 * /api/district/{id}:
 *   get:
 *     summary: get the district by id
 *     tags: [District]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: District ID
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: details of district
 *       404:
 *         description: District not found
 *       500:
 *         description: Server error
 */

router.get("/district/:id", DistrictController.getDistrict);

/**
 * @swagger
 * /api/district/{id}:
 *   put:
 *     summary: update the district by id
 *     tags: [District]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: District ID
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
 *               region_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: district updated
 *       404:
 *         description: District not found
 *       500:
 *         description: Server error
 */
router.put("/district/:id", DistrictController.updateDistrict);

/**
 * @swagger
 * /api/district/{id}:
 *   delete:
 *     summary: delete the district by id
 *     tags: [District]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: District ID
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: District deleted
 *       404:
 *         description: District not found
 *       500:
 *         description: Server error
 */

router.delete("/district/:id", DistrictController.deleteDistrict);

module.exports = router;

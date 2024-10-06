const {Router} = require("express")
const router = Router()
const RegionController = require("../controllers/region.controller")


/**
 * @swagger
 * tags:
 *   name: Region
 *   description: Region
 */

/**
 * @swagger
 * /api/region:
 *   post:
 *     summary: create a new region
 *     tags: [Region]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               postpone:
 *                 type: number
 *     responses: 
 *       200:
 *         description: Region created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/region",RegionController.createRegion)

/**
 * @swagger
 * /api/region:
 *   get:
 *     summary: get the regions
 *     tags: [Region]
 *     responses: 
 *       200:
 *         description: get the regions
 *       500:
 *         description: Server error
 */
router.get("/region",RegionController.getRegion)

/**
 * @swagger
 * /api/region/{id}:
 *   get:
 *     summary: get the region by id
 *     tags: [Region]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Region ID
 *         schema:
 *           type: integer
 *         required: true
 *     responses: 
 *       200:
 *         description: details of regions
 *       404:
 *         description: Region not found
 *       500:
 *         description: Server error 
 */
router.get("/region/:id",RegionController.getRegionById)

/**
 * @swagger
 * /api/region/{id}:
 *   put:
 *     summary: update the region by id
 *     tags: [Region]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Region ID
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
 *               postpone:
 *                 type: number
 *     responses: 
 *       200:
 *         description: update the region by id
 *       404:
 *         description: Region not found
 *       500:
 *         description: Server error    
 */
router.put("/region/:id",RegionController.updateRegion)

/**
 * @swagger
 * /api/region/{id}:
 *   delete:
 *     summary: delete the region by id
 *     tags: [Region]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Region ID
 *         schema:
 *           type: integer
 *         required: true
 *     responses: 
 *       200:
 *         description: delete the region by id
 *       404:
 *         description: Region not found
 *       500:
 *         description: Server error  
 */
router.delete("/region/:id",RegionController.deleteRegion)

module.exports = router
const { Router } = require("express")
const router = Router()
const CountryController = require("../controllers/country.controller")

/**
 * @swagger
 * tags:
 *   name: Country
 *   description: Country
 */

/**
 * @swagger
 * /api/country:
 *   post:
 *     summary: create a new Country
 *     tags: [Country]
 *     requestBody:
 *       required: true
 *       content: 
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               country:
 *                 type: string
 *     responses:
 *       200:
 *         description: Country created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */

router.post("/country", CountryController.createCountry)

/**
 * @swagger
 * /api/country:
 *   get:
 *     summary: get the countries
 *     tags: [Country]
 *     responses:
 *       200:
 *         description: list of countries
 *       500:
 *         description: Server error
 */

router.get("/country", CountryController.getCountry)

/**
 * @swagger
 * /api/country/{id}:
 *   get:
 *     summary: get the country by id
 *     tags: [Country]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Country ID
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: Country details
 *       404:
 *         description: Country not found
 *       500:
 *         description: Server error
 */

router.get("/country/:id", CountryController.getCountryById)

/**
 * @swagger
 * /api/country/{id}:
 *   put:
 *     summary: update the country
 *     tags: [Country]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Country ID
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
 *               country:
 *                 type: string
 *     responses:
 *       200:
 *         description: Country updated
 *       404:
 *         description: Country not found
 *       500:
 *         description: Server error
 */

router.put("/country/:id", CountryController.updateCountry)

/**
 * @swagger
 * /api/country/{id}:
 *  delete:
 *    summary: delete the country by id
 *    tags: [Country]
 *    parameters:
 *      - in: path
 *        name: id
 *        description: Country ID
 *        schema:
 *          type: integer
 *        required: true
 *    responses:
 *      200:
 *        description: Country updated
 *      404:
 *        description: Country not found
 *      500:
 *        description: Server error
 */

router.delete("/country/:id",CountryController.deleteCountry)

module.exports = router
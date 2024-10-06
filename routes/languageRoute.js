const {Router} = require("express")
const router = Router()
const LanguageController = require("../controllers/language.controller")

/**
 * @swagger
 * tags:
 *   name: Language
 *   description: Language
 */

/**
 * @swagger
 * /api/language:
 *   post:
 *     summary: create a new language
 *     tags: [Language]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description: 
 *                 type: string
 *     responses:
 *       200:
 *         description: create a new language
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/language",LanguageController.createLanguage)

/**
 * @swagger
 * /api/language:
 *   get:
 *     summary: get the languages
 *     tags: [Language]
 *     responses:
 *       200:
 *        description: get the language
 *       500:
 *        description: Server error
 */
router.get("/language",LanguageController.getLanguage)
/**
 * @swagger
 * /api/language/{id}:
 *   get:
 *     summary: get the language by id
 *     tags: [Language]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Language ID
 *         schema:
 *           type: integer
 *         required: true
 *     responses: 
 *       200:
 *         description: get the language by id
 *       404:
 *         description: Language not found
 *       500:
 *         description: Server error
 */
router.get("/language/:id",LanguageController.getLanguageById)

/**
 * @swagger
 * /api/language/{id}:
 *   put:
 *     summary: update the language
 *     tags: [Language]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Language ID
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
 *               description: 
 *                 type: string
 *     responses: 
 *       200:
 *         description: update the language by id
 *       404:
 *         description: Language not found
 *       500:
 *         description: Server error 
 */
router.put("/language/:id",LanguageController.updateLanguage)

/**
 * @swagger
 * /api/language/{id}:
 *   delete:
 *     summary: delete the language
 *     tags: [Language]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Language ID
 *         schema:
 *           type: integer
 *         required: true
 *     responses: 
 *       200:
 *         description: delete the language by id
 *       404:
 *         description: Language not found
 *       500:
 *         description: Server error 
 */
router.delete("/language/:id",LanguageController.deleteLanguage)

module.exports = router
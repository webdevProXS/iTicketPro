const express = require('express');
const router = express.Router();
const genderController = require("../controllers/gender.controller");

/**
 * @swagger
 * tags:
 *    name: Gender
 *    description: Gender management
 */
/**
 * @swagger
 * /api/gender:
 *   get:
 *     summary: Get all genders
 *     tags: [Gender]
 *     description: Retrieves a list of gender
 *     responses:
 *        '200':
 *           description: A successful response with a list of gender
 *        '500':
 *           description: Internal server error
 */
router.get("/gender", genderController.getGender);

/**
 * @swagger
 * /api/gender/{id}:
 *    get:
 *      summary: Get a gender by Id
 *      tags: [Gender]
 *      description: Retrieve a gender by its Id
 *      parameters:
 *           - in: path
 *             name: id
 *             description: Id of the gender to retrieve
 *             required: true
 *             schema:
 *                 type: string
 *      responses:
 *             '200':
 *               description: A successful response
 *             '404':
 *               description: Not Found
 *             '500':
 *               description: Internal server error
*/
router.get("/gender/:id", genderController.getGenderById);

/**
 * @swagger
 * /api/gender:
 *   post:
 *      summary: Post a new gender
 *      tags: [Gender]
 *      description: Create a new gender with the provided details
 *      requestBody:
 *         required: true
 *         content:
 *            application/json:
 *                 schema:
 *                    type: object
 *                    properties:
 *                        name:
 *                           type: string
 *      responses:
 *        '201':
 *          description: Created successfully
 *        '500':
 *          description: Internal server error
 */

router.post("/gender", genderController.createGender);
/**
 * @swagger
 * /api/gender/{id}:
 *    put:
 *      summary: Update gender by ID
 *      tags: [Gender] 
 *      description: Update a gender with the provided id and details
 *      parameters:
 *        - in: path
 *          name: id
 *          description: ID of the country to update
 *          required: true
 *          schema:
 *            type: string
 *      requestBody:
 *          required: true
 *          content:
 *             application/json:
 *                schema:
 *                   type: object
 *                   properties:
 *                        name:
 *                           type: string
 *      responses:
 *          '200':
 *            description: Updated successfully
 *          '404':
 *            description: Not found
 *          '500':
 *            description: Internal Server Error
 */

router.put("/gender/:id", genderController.updateGender);

/**
 * @swagger
 * /api/gender/{id}:
 *    delete:
 *      summary: Delete a gender By id
 *      tags: [Gender]
 *      description: Delete a gender with the provided id
 *      parameters:
 *        - in: path
 *          name: id
 *          description: ID of the gender to delete
 *          required: true
 *          schema:
 *            type: string
 *      responses:
 *         '200':
 *           description: Deleted successfully
 *         '404':
 *           description: Not found
 *         '500':
 *           description: Internal server error
 */
router.delete("/gender/:id", genderController.deleteGender);

module.exports = router;

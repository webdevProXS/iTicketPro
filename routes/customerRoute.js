const {Router} = require("express")
const router = Router()
const CustomerController = require("../controllers/customer.controller")

/**
 * @swagger
 * tags:
 *   name: Customer
 *   description: Customer
 */

/**
 * @swagger
 * /api/customer:
 *   post:
 *     summary: create a new customer
 *     tags: [Customer]
 *     requestBody:
 *       required: true 
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               first_name:
 *                 type: string
 *               last_name:
 *                 type: string
 *               phone:
 *                 type: string
 *               hashed_password:
 *                 type: string
 *               email:
 *                 type: string
 *               birth_date:
 *                 type: string
 *               gender_id:
 *                 type: number
 *               lang_id:
 *                 type: number
 *               hashed_refresh_token:
 *                 type: string
 *               
 *     responses:  
 *       200:
 *         description: Customer created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */

router.post("/customer",CustomerController.createCustomer)

/**
 * @swagger
 * /api/customer:
 *   get:
 *     summary: Get all the customers
 *     tags: [Customer]
 *     responses:
 *       200:
 *         description: list of customers
 *       500:
 *         description: Server error
 */
router.get("/customer",CustomerController.getCustomer)

/**
 * @swagger
 * /api/customer/{id}:
 *   get:
 *     summary: get customer by id
 *     tags: [Customer]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Customer ID
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: Customer details
 *       404:
 *         description: Customer not found
 *       500:
 *         description: Server error
 */
router.get("/customer/:id",CustomerController.getCustomerById)


/**
 * @swagger
 * /api/customer/{id}:
 *   put:
 *     summary: Update the customer by id
 *     tags: [Customer]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Customer ID
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
 *               first_name:
 *                 type: string
 *               last_name:
 *                 type: string
 *               phone:
 *                 type: string
 *               hashed_password:
 *                 type: string
 *               email:
 *                 type: string
 *               birth_date:
 *                 type: string
 *               gender_id:
 *                 type: number
 *               lang_id:
 *                 type: number
 *               hashed_refresh_token:
 *                 type: string
 *     responses:
 *       200:
 *         description: Customer updated
 *       404:
 *         description: Customer not found
 *       500:
 *         description: Server error
 */

router.put("/customer/:id",CustomerController.updateCustomer)

/**
 * @swagger
 * /api/customer/{id}:
 *   delete:
 *     summary: delete the customer by id
 *     tags: [Customer]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Customer ID
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: Customer deleted
 *       400:
 *         description: Customer not found
 *       500:
 *         description: Server error
 */
router.delete("/customer/:id",CustomerController.deleteCustomer)

module.exports = router

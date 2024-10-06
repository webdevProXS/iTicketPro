const { Router } = require("express")
const router = Router()
const AdminController = require("../controllers/admin.controller")

/**
 * @swagger
 * tags:
 *   name: Admin
 *   description: Admin
 */

/**
 * @swagger
 * /api/admin:
 *   post:
 *     tags: [Admin]
 *     summary: Create a new Admin
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               login:
 *                 type: string
 *               hashed_password:
 *                 type: string
 *               is_active:
 *                 type: boolen
 *               is_creator:
 *                 type: boolen
 *     responses:
 *       201:
 *           description: admin is created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 * 
 */

router.post("/admin", AdminController.createAdmin)

/**
 * @swagger
 * /api/admins:
 *   get:
 *     summary: Get the all admins
 *     tags: [Admin]
 *     responses:
 *       200:
 *         description: List of users
 *       500:
 *         description: Server error
 */

router.get("/admins", AdminController.getAdmins)

/**
 * @swagger
 * /api/admin/{id}:
 *   get:
 *     summary: Get the admin by id
 *     tags: [Admin]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Admin Id
 *     responses:
 *       200:
 *         description: User details
 *       404:
 *         description: User not found
 *       500:
 *         description: Server error
 */

router.get("/admin/:id", AdminController.getAdminById)

/**
 * @swagger
 * /api/admin/{id}:
 *   put:
 *     summary: Update the admin by id
 *     tags: [Admin]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Admin ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               login:
 *                 type: string
 *               hashed_password:
 *                 type: string
 *               is_active:
 *                 type: boolen
 *               is_creator:
 *                 type: boolen
 *     responses:
 *       200:
 *         description: User updated
 *       404:
 *         description: User not found
 *       500:
 *         description: Server error               
 */
router.put("/admin/:id", AdminController.updateAdmin)

/**
 * @swagger
 * /api/admin/{id}:
 *   delete:
 *     summary: Delete the admin by id
 *     tags: [Admin]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Admin ID
 *     responses:
 *       200:
 *         description: Admin deleted
 *       404:
 *         description: Admin not found
 *       500:
 *         description: Server error
 */

router.delete("/admin/:id", AdminController.deleteAdmin)




module.exports = router
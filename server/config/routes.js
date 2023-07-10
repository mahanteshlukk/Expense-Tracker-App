const express = require("express")
const router = express.Router()
const userController = require("../app/controllers/usersController.js")
const budgetController = require("../app/controllers/budgetsController.js")
const categoryController = require("../app/controllers/categoriesController.js")
const expenseController = require("../app/controllers/expensesController.js")
const profileController = require("../app/controllers/profileController.js")
const {
  userAuthentication,
} = require("../app/middlewares/userAuthentication.js")
const upload = require("../app/middlewares/upload.js")


router.get("/api/users/account", userAuthentication, userController.account)
router.post("/api/users/register", userController.register)
router.post("/api/users/login", userController.login)


router.post("/api/budgets", userAuthentication, budgetController.create)
router.get("/api/budgets", userAuthentication, budgetController.list)
router.put("/api/budgets/:id", userAuthentication, budgetController.update)


router.get("/api/categories", userAuthentication, categoryController.list)
router.post("/api/categories", userAuthentication, categoryController.create)
router.delete(
  "/api/categories/:id",
  userAuthentication,
  categoryController.destroy
)

router.get("/api/expenses", userAuthentication, expenseController.list)
router.post("/api/expenses", userAuthentication, expenseController.create)
router.put("/api/expenses/:id", userAuthentication, expenseController.update)
router.delete(
  "/api/expenses/:id",
  userAuthentication,
  expenseController.destroy
)

router.delete(
  "/api/multiple/expenses/:id",
  userAuthentication,
  expenseController.multipleDestroy
)

router.delete(
  "/api/expenses/softDeleted/:id",
  userAuthentication,
  expenseController.softDelete
)
router.get(
  "/api/expenses/softRestore/:id",
  userAuthentication,
  expenseController.softRestore
)
router.get(
  "/api/expenses/deleteData",
  userAuthentication,
  expenseController.deleteData
)

router.post(
  "/upload",
  userAuthentication,
  upload.single("profile"),
  profileController.create
)

router.get("/upload", userAuthentication, profileController.show)
router.put(
  "/upload/:id",
  userAuthentication,
  upload.single("profile"),
  profileController.update
)

module.exports = router 
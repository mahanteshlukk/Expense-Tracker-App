const Category = require("../models/category.js")
const Expense = require("../models/expense.js")

categoryController = {}

categoryController.list = (req, res) => {
  Category.find({ userId: req.user._id })
    .then((Category) => {
      res.json(Category)
    })
    .catch((err) => {
      res.json(err)
    })
}

categoryController.create = (req, res) => {
  const body = req.body
  body.userId = req.user._id
  const category = new Category(body)
  category
    .save()
    .then((category) => {
      res.json(category)
    })
    .catch((err) => {
      res.json(err)
    })
}

categoryController.destroy = (req, res) => {
  const id = req.params.id
  Category.findOneAndDelete({ _id: id, userId: req.user._id })
    .then((category) => {
      res.json(category)
    })
    .catch((err) => {
      res.json(err)
    })
}

module.exports = categoryController 
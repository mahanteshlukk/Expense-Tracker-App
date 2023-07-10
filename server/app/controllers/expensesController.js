const Expense = require("../models/expense.js")
const mongoose_delete = require("mongoose-delete")

const expenseController = {}

expenseController.list = (req, res) => {
  Expense.find({ userId: req.user._id })
    .then((expense) => {
      res.json(expense)
    })
    .catch((err) => {
      res.json(err)
    })
}

expenseController.create = (req, res) => {
  const body = req.body
  body.userId = req.user._id
  const expense = new Expense(body)
  expense
    .save()
    .then((expense) => {
      res.json(expense)
    })
    .catch((err) => {
      res.json(err)
    })
}

expenseController.update = (req, res) => {
  const { id } = req.params
  const { body } = req
  Expense.findOneAndUpdate({ _id: id, userId: req.user._id }, body, {
    new: true,
    runValidators: true,
  })
    .then((Expense) => {
      res.json(Expense)
    })
    .catch((err) => {
      res.json(err)
    })
}

expenseController.destroy = (req, res) => {
  const { id } = req.params
  Expense.findOneAndDelete({ _id: id, userId: req.user._id })
    .then((Expense) => {
      res.json(Expense)
    })
    .catch((err) => {
      res.json(err)
    })
}

expenseController.multipleDestroy = (req, res) => {
  const { id } = req.params
  Expense.deleteMany({ categoryId: id, userId: req.user._id })
    .then((expense) => {
      res.json(expense)
    })
    .catch((err) => {
      res.json(err)
    })
}

expenseController.softDelete = (req, res) => {
  const { id } = req.params
  Expense.deleteById({ _id: id, userId: req.user._id })
    .then((expense) => {
      res.json(expense)
    })
    .catch((err) => {
      res.json(err)
    })
}

expenseController.softRestore = (req, res) => {
  const { id } = req.params
  Expense.restore({ _id: id, userId: req.user._id })
    .then((expense) => {
      res.json(expense)
    })
    .catch((err) => {
      res.json(err)
    })
}

expenseController.deleteData = (req, res) => {
  Expense.findDeleted({ userId: req.user._id })
    .then((expense) => {
      res.json(expense)
    })
    .catch((err) => {
      res.json(err)
    })
}

module.exports = expenseController
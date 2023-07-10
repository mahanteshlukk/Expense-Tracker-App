const Budget = require("../models/budget.js")

const budgetController = {}

budgetController.list = (req, res) => {
  Budget.find({ userId: req.user._id })
    .then((Budget) => {
      res.json(Budget)
    })
    .catch((err) => {
      res.json(err)
    })
}

budgetController.create = (req, res) => {
  const body = req.body
  body.userId = req.user._id
  const budget = new Budget(body)
  budget
    .save()
    .then((budget) => {
      res.json(budget)
    })
    .catch((err) => {
      res.json(err)
    })
}

budgetController.update = (req, res) => {
  const { id } = req.params
  const { body } = req
  Budget.findOneAndUpdate({ _id: id, userId: req.user._id }, body, {
    new: true,
    runValidators: true,
  })
    .then((Budget) => {
      res.json(Budget)
    })
    .catch((err) => {
      res.json(err)
    })
}

module.exports = budgetController 
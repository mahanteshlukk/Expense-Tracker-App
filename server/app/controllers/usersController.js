const User = require("../models/user.js")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")

userController = {}

userController.register = (req, res) => {
  const body = req.body
  const user = new User(body)
  user
    .save()
    .then((User) => {
      res.json(User)
    })
    .catch((err) => {
      res.json(err)
    })
}

userController.login = (req, res) => {
  const body = req.body
  User.findOne({ email: body.email }).then((user) => {
    if (!user) {
      res.json({ error: "invalid email or password" })
    }
    bcryptjs
      .compare(body.password, user.password)
      .then((match) => {
        if (match) {
          const tokenData = {
            _id: user._id,
            username: user.username,
            email: user.email,
          }
          const token = jwt.sign(tokenData, "mantu123", { expiresIn: "20d" })
          res.json({
            token: `Bearer ${token}`,
          })
        } else {
          res.json({ error: "invalid email or password" })
        }
      })
      .catch((err) => {
        res.json(err)
      })
  })
}

userController.account = (req, res) => {
  res.json(req.user)
}

module.exports = userController
const jwt = require("jsonwebtoken")
const User = require("../models/user.js")

const userAuthentication = (req, res, next) => {
  let token = req.header("Authorization")
  let tokenData
  if (token) {
    token = token.split(" ")[1]
    try {
      const tokenData = jwt.verify(token, "mantu123")
      User.findById(tokenData._id)
        .then((user) => {
          req.user = user;
          next();
        })
        .catch((err) => {
          res.json(err)
        })
    } catch (e) {
      res.json(e.message)
    }
  } else {
    res.json({
      error: "something went wrong in token",
    })
  }
}

module.exports = {
  userAuthentication,
}
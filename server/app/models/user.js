const mongoose = require("mongoose")
const validator = require("validator")
const bcryptjs = require("bcryptjs")
const Budget = require("./budget")

const Schema = mongoose.Schema
const userSchema = new Schema(
  {
    username: {
      type: String,
      minlength: 6,
      maxlength: 64,
      required: [true, "name should be required"]
    },
    email: {
      type: String,
      required: [true, "email should be required"],
      validate: {
        validator: function (value) {
          return validator.isEmail(value)
        },
        message: function () {
          return "invalid email format"
        }
      }
    },
    password: {
      type: String,
      required: [true, "password should be required"],
      validate: {
        validator: function (value) {
          return validator.isStrongPassword(value)
        },
        message: function () {
          return "invalid password format"
        }
      }
    }
  },
  { timestamps: true }
)

userSchema.pre("save", function (next) {
  const user = this
  bcryptjs.genSalt().then((salt) => {
    bcryptjs.hash(user.password, salt).then((encrypted) => {
      user.password = encrypted
      next()
    })
  })
})

userSchema.post("save", function (doc, next) {
  const budgetData = {
    amount: 0,
    userId: doc._id
  }
  const budget = new Budget(budgetData)
  budget
    .save()
    .then((budget) => {
      next()
    })
    .catch((err) => {
      console.log(err)
      next()
    })
})

const User = mongoose.model("User", userSchema)

module.exports = User  
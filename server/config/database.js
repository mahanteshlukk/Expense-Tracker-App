const mongoose = require("mongoose")

const configureDb = () => {
  mongoose.set("strictQuery", true)
  mongoose
    .connect("mongodb://127.0.0.1:27017/expense-tracker-app")
    .then(() => {
      console.log('connected to db')
    })
    .catch(() => {
      console.log('error', err)
    })
}

module.exports = configureDb 
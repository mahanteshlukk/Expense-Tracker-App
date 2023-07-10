const mongoose = require("mongoose")

const Schema = mongoose.Schema
const categorySchema = new Schema({
  name: {
    type: String,
    required: [true, "name should be required"],
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
})

const Category = mongoose.model("Category", categorySchema)

module.exports = Category 
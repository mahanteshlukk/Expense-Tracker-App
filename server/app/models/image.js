const mongoose = require("mongoose")

const Schema = mongoose.Schema
const imageSchema = new Schema(
  {
    image: {
      type: String,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
)

const Image = mongoose.model("Image", imageSchema)

module.exports = Image
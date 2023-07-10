const mongoose = require("mongoose")
const mongoose_delete = require("mongoose-delete")

const Schema = mongoose.Schema
const expenseSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "name should be required"],
    },
    amount: {
      type: Number,
      required: [true, "amount should be required"],
    },
    description: {
      type: String,
      required: [true, "description should be required"],
    },
    expenseDate: {
      type: Date,
      required: [true, "Date should be required"],
    },
    categoryId: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
)

expenseSchema.plugin(mongoose_delete, { overrideMethods: true })

const Expense = mongoose.model("Expense", expenseSchema)

module.exports = Expense 
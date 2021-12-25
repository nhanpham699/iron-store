import mongoose from "mongoose"
const Schema = mongoose.Schema

const productSchema = new Schema({
  name: String,
  price: Number,
  quantity: Number,
  date: String,
  type: String,
})

// (mongoose as any).models = {}

module.exports =
  mongoose.models.Product || mongoose.model("Product", productSchema)

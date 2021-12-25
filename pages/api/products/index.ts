import { NextApiRequest, NextApiResponse } from "next"
import connectDB from "../../../utils/mongodb"
const Product = require("../../../models/products")

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req

  switch (method) {
    case "GET":
      const products = await Product.find()
      res.status(200).json(products)
      break
    case "POST":
      try {
        const products = await Product.create(req.body)
        res.status(200).json({ success: true, data: products })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
export default connectDB(handler)

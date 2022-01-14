import { NextApiRequest, NextApiResponse } from "next"
import connectDB from "../../../utils/mongodb"
const Product = require("../../../models/products")
connectDB()

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const product = new Product(req.body)
    await product.save()
    req.body._id = product._id.toString()
    if (product) {
      res.status(200).json(req.body)
    }
  } catch (error) {
    res.status(400).json({ success: false })
  }
}
export default handler

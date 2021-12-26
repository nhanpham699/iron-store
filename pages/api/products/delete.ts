import { NextApiRequest, NextApiResponse } from "next"
import connectDB from "../../../utils/mongodb"
const Product = require("../../../models/products")

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const products = await Product.deleteOne(req.body)
    if (products) {
      res.status(200).json({ success: true })
    }
  } catch (error) {
    res.status(400).json({ success: false })
  }
}
export default connectDB(handler)

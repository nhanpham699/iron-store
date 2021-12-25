import { NextApiRequest, NextApiResponse } from "next"
import connectDB from "../../../utils/mongodb"
const Product = require("../../../models/products")

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { _id } = req.body
    delete req.body._id
    const result = await Product.updateOne({ _id: _id }, req.body)
    if (result.acknowledged) {
      res.status(200).json({ success: true })
    }
  } catch (error) {
    res.status(400).json({ success: false })
  }
}
export default connectDB(handler)

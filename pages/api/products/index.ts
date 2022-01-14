import { NextApiRequest, NextApiResponse } from "next"
import connectDB from "../../../utils/mongodb"

const Product = require("../../../models/products")

connectDB()

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req

  switch (method) {
    case "GET":
      const products = await Product.find()
      res.status(200).json(products)
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
export default handler

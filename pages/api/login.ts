import { NextApiRequest, NextApiResponse } from "next"
import connectDB from "../../utils/mongodb"
const bcrypt = require("bcrypt")

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  //   const salt = bcrypt.genSaltSync(10)
  //   const hash = bcrypt.hashSync("thaitrinh220514", salt)
  //   console.log(hash)
  res.status(200).json({ username: "Nhan dep trai" })
}

export default connectDB(handler)

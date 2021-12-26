import { NextApiRequest, NextApiResponse } from "next"
import connectDB from "../../utils/mongodb"
const bcrypt = require("bcrypt")
const User = require("../../models/user")

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const user = new User({
    username: "thaitrinh",
    password: "$+thaitrinh220514",
  })
  await user.save()
  res.send({ action: true })
}

export default connectDB(handler)

import { NextApiResponse } from "next"
import { withSessionRoute } from "../../lib/iron-session"
import connectDB from "../../utils/mongodb"
const User = require("../../models/users")

const handler = async (req: any, res: NextApiResponse) => {
  try {
    req.session.destroy()
    res.send({ loggedOut: true })
  } catch (error) {
    res.status(400).send(error)
  }
}

export default connectDB(withSessionRoute(handler))

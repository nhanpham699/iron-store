import { NextApiResponse } from "next"
// import authenticated from "../../lib/auth"
import { withSessionRoute } from "../../lib/iron-session"
import connectDB from "../../utils/mongodb"

const handler = async (req: any, res: NextApiResponse) => {
  try {
    const jwt = req.session.get("jwt")
    res.send({ jwt: jwt })
  } catch (error) {
    res.status(400).send(error)
  }
}

export default connectDB(withSessionRoute(handler))

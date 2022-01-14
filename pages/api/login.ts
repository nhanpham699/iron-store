import { NextApiResponse } from "next"
import { withSessionRoute } from "../../lib/iron-session"
import connectDB from "../../utils/mongodb"

const User = require("../../models/users")

connectDB()

const handler = async (req: any, res: NextApiResponse) => {
  const { username, password } = req.body
  const user = await User.findByCredentials(username, password)
  if (!user) {
    return res.status(250).send({ error: "Đăng nhập không thành công!" })
  }
  const jwt = await user.generateAuthToken()
  req.session.jwt = jwt
  await req.session.save()
  res.send({ loggedIn: true })
}

export default withSessionRoute(handler)

import { NextApiResponse } from "next"
import { withSessionRoute } from "../../lib/iron-session"

const handler = async (req: any, res: NextApiResponse) => {
  try {
    req.session.destroy()
    res.send({ loggedOut: true })
  } catch (error) {
    res.status(400).send(error)
  }
}

export default withSessionRoute(handler)

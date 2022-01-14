import compression from "compression"
import express from "express"
import next from "next"
const mongoose = require("mongoose")
const dev = process.env.NODE_ENV !== "production"
const app = next({ dev })
const handle = app.getRequestHandler()
const port = dev ? 3000 : 8080

app
  .prepare()
  .then(() => {
    const server = express()
    // support gzip
    server.use(compression())

    // MongoDB

    mongoose.connect(process.env.MONGO_URI, (err) => {
      if (err) console.log("Error! " + err)
      else console.log("successful mongoose conection!!!!!!!!!!!!!!!!!")
    })

    server.get("*", (req, res) => {
      return handle(req, res)
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })

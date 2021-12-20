// import validator from "validator"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import mongoose from "mongoose"
const SECRET_KEY = process.env.SECRET_KEY

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
})

userSchema.methods.generateAuthToken = async function () {
  const user = this
  const token = jwt.sign({ _id: user._id }, SECRET_KEY as string)
  return token
}

userSchema.pre("save", async function (next) {
  const user = this
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8)
  }
  next()
})

userSchema.statics.findByCredentials = async function (username, password) {
  const user = await this.findOne({ username })
  if (!user) {
    return false
  }
  const isPasswordMatch = await bcrypt.compare(password, user.password)
  if (!isPasswordMatch) {
    return false
  }
  return user
}

module.exports = mongoose.models.User || mongoose.model("User", userSchema)

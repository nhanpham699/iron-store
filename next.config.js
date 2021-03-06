const path = require("path")
const Dotenv = require("dotenv-webpack")

module.exports = {
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: (config) => {
    config.plugins = [
      ...config.plugins,
      new Dotenv({
        path: path.join(__dirname, ".env"),
        systemvars: true,
      }),
    ]
    return config
  },
}

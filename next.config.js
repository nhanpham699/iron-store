const path = require("path")
const Dotenv = require("dotenv-webpack")

module.exports = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: "/hocphi/api/account",
  //     },
  //   ]
  // },
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

const webpack = require("webpack");

module.exports = {
  // existing config...
  plugins: [
    new webpack.DefinePlugin({
      NODE_OPTIONS: JSON.stringify("--openssl-legacy-provider"),
    }),
  ],
};

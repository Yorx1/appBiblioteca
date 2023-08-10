const path = require("node:path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssStarPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  entry: "./frontend/app.js",
  output: {
    path: path.join(__dirname, "backend/public"),
    filename: "js/bundle.js",
  },
  mode: "development",
  

  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          devMode ? "style-loader" : MiniCssStarPlugin.loader,
          "css-loader",
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./frontend/index.html",
    }),
    new MiniCssStarPlugin({
        filename: "css/bundle.css"
    })
  ],
  devtool: "source-map"
};

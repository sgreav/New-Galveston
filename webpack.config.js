
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: "development",
  watch: true,
  devtool: "inline-source-map",
  plugins: [
      new HtmlWebpackPlugin({
        template: './index.hbs'
      }),
      new webpack.HotModuleReplacementPlugin()
  ],
  entry: "./src/index.tsx",
  output: {
    path: __dirname + '/dist',
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader", options: { transpileOnly: true } }
    ]
  }
};
const path = require('path')
const webpack = require('webpack')
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
    path: __dirname + '/dist'
  },
  resolve: {
    extensions: [".scss", ".ts", ".tsx", ".js"]
  },
  module: {
    rules: [{
      // borrowed from https://github.com/joshuacrass/react-scss-webpack/blob/master/config/webpack-dev-config.js
      test: /\.scss$/,
      enforce: 'pre',
      use: [
        'style-loader',
        'css-loader',
        'typed-css-modules-loader',
        'sass-loader'
      ],
    },
      { test: /\.tsx?$/, loader: "ts-loader" },
      
    ]
  }
};
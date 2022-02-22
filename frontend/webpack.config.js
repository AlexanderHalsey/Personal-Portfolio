const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "./static/frontend"),
    filename: "[name].js"
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: "/node_modules/"
      },
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: "/node_modules/"
      },
    ],
  },
  optimization: {
    minimize: true
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: './templates/frontend/base.html'
    }),
  ]
};
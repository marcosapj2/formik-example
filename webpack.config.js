const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: {
    app: ["regenerator-runtime/runtime", "./src/index.jsx"]
  },

  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].[hash].js",
    publicPath: "/"
  },

  performance: {
    hints: false
  },

  resolve: {
    alias: {
      containers: path.resolve(__dirname, "./src/containers"),
      components: path.resolve(__dirname, "./src/components"),
      assets: path.resolve(__dirname, "./src/assets"),
      utils: path.resolve(__dirname, './src/utils')
    },
    modules: [path.resolve(__dirname, "node_modules")],
    extensions: [".jsx", ".js"]
  },

  devtool: "source-map",
  mode: "development",
  devServer: {
    hot: true,
    port: 2019,
    publicPath: "/"
  },
  module: {
    rules: [
      { test: /\.(png|svg|woff|woff2|ttf|eot)/, loader: "file-loader" },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
      },
      { test: /\.(js|jsx)?$/, loader: "babel-loader", exclude: /node_modules/ }
    ]
  },

  optimization: {
    runtimeChunk: true,
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /node_modules/,
          name: "vendors",
          chunks: "all"
        }
      }
    }
  },

  plugins: [
    new CleanWebpackPlugin(["build"]),
    new HtmlWebpackPlugin({
      title: "facebook - formik",
      template: "./src/index.ejs",
      favicon: "./src/assets/images/favicon.ico"
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
  ]
};

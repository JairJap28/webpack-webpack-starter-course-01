const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {
  superHeroDomain,
  helloWorldDomain,
  dashboardDomain,
} = require("../utils/utils");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: "./src/dashboard.js",
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: `${dashboardDomain}/`,
  },
  mode: "production",
  optimization: {
    splitChunks: {
      chunks: "all",
      // min size to split chuck
      minSize: 10000,
      automaticNameDelimiter: "_",
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"],
          },
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "dashboard.html",
      title: "Dashboard",
    }),
    new ModuleFederationPlugin({
      name: "App",
      remotes: {
        HelloWorldApp: `HelloWorldApp@${helloWorldDomain}/remoteEntry.js`,
        SuperHeroApp: `SuperHeroApp@${superHeroDomain}/remoteEntry.js`,
      },
    }),
  ],
};

/**
 * TYPE RESOURCES
 * - asset/resource: generates the file and add an URL to the resource
 * - asset/inline: generate a base64 enconded in the place where the resource is used
 * - asset: webpack will decide it automatically; less than 8Kb the resource is going to be treated
 *          as asset/inline, otherwise it will be treated as asset/resource.
 *          It accepts an option to determine the size of the file
 *          parser: {
 *            dataUrlCondition: { maxSize: 3 * 1024; // 3 kilobytes }
 *          }
 */

/**
 * LOADERS
 * - There are some loaders that came with webpack, other ones need to be installed as a devDependency
 */

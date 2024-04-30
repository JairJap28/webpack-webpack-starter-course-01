const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require('webpack').container;
const {  IMAGE_CAPTION_PORT, imageCaptionDomain } = require('../utils/utils');

const PORT = IMAGE_CAPTION_PORT;

module.exports = {
  entry: "./src/hello-world.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: `${imageCaptionDomain}/`,
  },
  mode: "development",
  devServer: {
    port: PORT,
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    devMiddleware: {
      index: "image-caption.html",
      writeToDisk: true,
    },
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"]
          },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "image-caption.html",
      // chunks contains the names defined in the entry
      // those are the sections that are going to be injected
      title: "Image Caption",
      description: "Image Caption",
      template: "src/page-template.html"
    }),
    new ModuleFederationPlugin({
      name: 'ImageCaptionApp',
      filename: 'remoteEntry.js',
      exposes: {
        './IamgeCaption': './src/components/image-caption/image-caption.js'
      }
    })
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
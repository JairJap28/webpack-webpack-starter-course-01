const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require('webpack').container;

const getDomainPath = (port) =>
  `https://webpackwebpackstartercourse01-ciaw--${port}--41fbae16.local-credentialless.webcontainer.io`;

module.exports = {
  entry: "./src/super-hero.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "",
  },
  mode: "development",
  devServer: {
    port: 9002,
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    devMiddleware: {
      index: "super-hero.html",
      writeToDisk: true,
    },
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        type: "asset",
      },
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
            presets: ["@babel/env"],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "super-hero.html",
      title: "Super Hero",
      description: "Super Hero page",
      template: "src/page-template.html",
      minify: false,
    }),
    new ModuleFederationPlugin({
      name: 'SuperHeroApp',
      remotes: {
        HelloWorldApp: `HelloWorldApp@${getDomainPath(9001)}/remoteEntry.js`
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

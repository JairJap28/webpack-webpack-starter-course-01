const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {
  DASHBOARD_PORT,
  dashboardDomain,
  helloWorldDomain,
  superHeroDomain,
} = require("../utils/utils");
const { ModuleFederationPlugin } = require("webpack").container;

const PORT = DASHBOARD_PORT;

module.exports = {
  entry: "./src/dashboard.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: `${dashboardDomain}`,
  },
  mode: "development",
  devServer: {
    port: PORT,
    devMiddleware: {
      index: "dashboard.html",
      writeToDisk: true,
    },
    historyApiFallback: {
      index: "dashboard.html",
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

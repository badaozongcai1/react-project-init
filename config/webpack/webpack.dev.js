// config/webpack/webpack.dev.js
const webpack = require("webpack");
const { merge } = require("webpack-merge");
// const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const commonConfig = require("./webpack.common");
const paths = require("./paths");

module.exports = merge(commonConfig, {
  mode: "development",
  devtool: "eval-source-map",

  output: {
    path: paths.appBuild,
    filename: "[name].js",
    publicPath: "/",
  },

  // stats: 'errors-only',
  // output: {
  //   publicPath: '/',
  //   //如果是通过loader 编译的 放到scripts文件夹里 filename
  //   filename: 'scripts/[name].bundle.js',
  //   //如果是通过'asset/resource' 编译的
  //   assetModuleFilename: 'images/[name].[ext]',
  // },

  module: {
    rules: [
      // CSS
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                auto: true,
                localIdentName: "[name]__[local]--[hash:base64:5]",
              },
            },
          },
          "postcss-loader",
        ],
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // new ReactRefreshWebpackPlugin(),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development"),
    }),
  ],

  devServer: {
    historyApiFallback: true,
    open: true,
    port: 3000,
    hot: true,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
    // proxy: {
    //   "/api": {
    //     target: "http://localhost:8080",
    //     changeOrigin: true,
    //     pathRewrite: { "^/api": "" },
    //   },
    // },
  },

  //   optimization: {
  //     removeAvailableModules: false,
  //     removeEmptyChunks: false,
  //     splitChunks: false,
  //   },
});

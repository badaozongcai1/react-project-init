// config/webpack/webpack.prod.js
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const paths = require("./paths");
const commonConfig = require("./webpack.common");

module.exports = merge(commonConfig, {
  mode: "production",

  output: {
    path: paths.appBuild,
    filename: "[name].[contenthash].js",
    chunkFilename: "[id].[contenthash].js",
    publicPath: "/",
    clean: true,
  },

  module: {
    rules: [
      // CSS
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                auto: true,
                localIdentName: "[hash:base64]",
              },
            },
          },
          "postcss-loader",
        ],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      chunkFilename: "[id].[contenthash].css",
    }),
    process.env.ANALYZE ? new BundleAnalyzerPlugin() : null,
    //   new webpack.DefinePlugin({
    //     "process.env.NODE_ENV": JSON.stringify("production"),
    //   }),
  ].filter(Boolean),

  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin({
        parallel: true,
      }),
      new TerserPlugin({
        parallel: true, // 启用多线程压缩
        terserOptions: {
          compress: {
            drop_console: true,
          },
          format: {
            comments: false, // 移除所有注释
          },
        },
        extractComments: false, // 不将注释提取到单独的文件中
      }),
    ],
    //   splitChunks: {
    //     chunks: "all",
    //     minSize: 20000,
    //     minChunks: 1,
    //     maxAsyncRequests: 30,
    //     maxInitialRequests: 30,
    //     cacheGroups: {
    //       defaultVendors: {
    //         test: /[\\/]node_modules[\\/]/,
    //         priority: -10,
    //         reuseExistingChunk: true,
    //       },
    //       default: {
    //         minChunks: 2,
    //         priority: -20,
    //         reuseExistingChunk: true,
    //       },
    //     },
    //   },
    //   runtimeChunk: "single",
  },

  // performance: {
  //   hints: "warning",
  //   maxEntrypointSize: 512000,
  //   maxAssetSize: 512000,
  // },
});

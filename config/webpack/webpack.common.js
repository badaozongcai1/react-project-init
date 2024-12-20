// config/webpack/webpack.common.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const paths = require("./paths");

module.exports = {
  entry: {
    main: path.resolve(paths.appSrc, "index.tsx"),
  },

  resolve: {
    extensions: [".js", ".ts", ".tsx", ".jsx", ".css"],
    alias: {
      "@": paths.appSrc,
      "@components": path.resolve(paths.appSrc, "components"),
      "@pages": path.resolve(paths.appSrc, "pages"),
      "@layouts": path.resolve(paths.appSrc, "layouts"),
      "@hooks": path.resolve(paths.appSrc, "hooks"),
      "@states": path.resolve(paths.appSrc, "states"),
    },
  },

  module: {
    rules: [
      // TypeScript
      {
        test: /\.(ts|tsx)$/,
        exclude: /(node_modules)/,
        use: {
          // `.swcrc` can be used to configure swc
          loader: "swc-loader",
        },
      },
      // Images
      {
        test: /\.(png|jpg|gif|jpeg|webp)$/i,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 10kb
          },
        },
      },
      // SVG
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
      // Fonts
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(paths.appSrc, "index.html"),
      favicon: path.resolve(paths.appSrc, "../public/favicon.ico"),
    }),

    // new ForkTsCheckerWebpackPlugin(),
  ],
};

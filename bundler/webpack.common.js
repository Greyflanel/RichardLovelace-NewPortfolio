const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const ImageminWebpWebpackPlugin = require("imagemin-webp-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundler.[contenthash].js",
    path: path.resolve(__dirname, "../dist"),
    clean: true,
  },
  plugins: [
    new ImageminWebpWebpackPlugin({
      detailedLogs: true,
      overrideExtension: true,
      silent: false,
      strict: true,
      quality: 75,
    }),
    
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../src/index.html"),
      minify: true,
    }),
    new MiniCSSExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
  module: {
    rules: [
      // JS
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },

      //   Sass/Scss
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },

      // Images
      /*{
        test: /\.(jpg|png|gif|svg|webp|mp4|glb|gltf)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ]
      },*/

      {
        test: /\.(png|webp|mp4|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              limit: 8192,
            },
          },
        ]
      },

      // CSS
      {
        test: /\.css$/i,
        use: [MiniCSSExtractPlugin.loader, "css-loader"],
      },

      // HTML
      {
        test: /\.(html)$/i,
        use: ["html-loader"],
      },
    ],
  },
};

const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const ImageminWebpWebpackPlugin = require("imagemin-webp-webpack-plugin");
const path = require("path");

module.exports = {
  entry: [
    "./src/index.js",
     "./src/script.js"
  ],
  output: {
    filename: "bundler.[contenthash].js",
    path: path.resolve(__dirname, "../dist"),
    clean: true,
  },
  devtool: "source-map",
  plugins: [
    new ImageminWebpWebpackPlugin({
      detailedLogs: true,
      overrideExtension: true,
      silent: false,
      strict: true,
      quality: 75,
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: path.resolve(__dirname, "../static/") }],
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
      // HTML
      {
        test: /\.(html)$/,
        use: ["html-loader"],
      },

      // JS
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },

      // CSS
      {
        test: /\.css$/,
        use: [MiniCSSExtractPlugin.loader, "css-loader"],
        
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
      {
        test: /\.(jpg|png|gif|svg|webp|mp4|glb|gltf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              
            },
          },
        ],
      },

      
      // Fonts
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "assets/fonts/",
            },
          },
        ],
      },
    ],
  },
};

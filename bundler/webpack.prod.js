const { merge } = require('webpack-merge')
const commonConfiguration = require('./webpack.common.js')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = merge(commonConfiguration, {
mode: "production",
  devtool: "source-map",
  plugins: [new CleanWebpackPlugin()],
  performance: {
    maxAssetSize: 500000000,
    maxEntrypointSize: 500000000,
    hints: "error",
    assetFilter: function (assetFilename) {
      return !assetFilename.endsWith(".jpg, .mp4, .png, .glb");
    },
  },
  
});


const { merge } = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');

const environmentConfig = require('./src/environments/environment.ts');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: './dist',
  },
  plugins: [
    new webpack.DefinePlugin(environmentConfig)
  ]
});
const { merge } = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');

const environmentConfig = require('./src/environments/environment.prod.ts');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new webpack.DefinePlugin(environmentConfig)
  ],
  optimization: {
    minimize: true
  }
});
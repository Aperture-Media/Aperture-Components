const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    'main': './src',
    'main.min': './src'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },
  optimization: {
    minimize: true
  }
};
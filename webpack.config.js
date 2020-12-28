const path = require('path');

module.exports = {
  mode: 'none',
  entry: './client/src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  module:
  {
    rules: [{
      test: /.jsx?$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    }]
  }
}
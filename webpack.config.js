module.exports = {
  context: __dirname,
  entry: './src/index.jsx',
  output: {
    filename: './dist/bundle.js'
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel', exclude: /node_modules/ }
    ]
  }
}
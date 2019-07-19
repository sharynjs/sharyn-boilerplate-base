const path = require('path')

module.exports = {
  entry: './src/_client/client.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'http://localhost:8080/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' },
      },
    ],
  },
  devServer: {
    hot: true,
    port: 8080,
    sockPort: 8080,
    headers: { 'Access-Control-Allow-Origin': '*' },
  },
}

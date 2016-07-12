module.exports = {
  entry: './app/App.js',
  output: {
    path: './public',
    filename: 'index.js'
  },
  devServer: {
    inline: true,
    contentBase: './public',
    port: 3333
  }
}

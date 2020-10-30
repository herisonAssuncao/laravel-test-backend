module.exports = {
  devServer: {
    disableHostCheck: true,
    sockHost: 'frontend.accordous',
    watchOptions: {
      ignored: /node_modules/,
      aggregateTimeout: 300,
      poll: 1000,
    }
  },
};
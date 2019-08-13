module.exports = process.env.NODE_ENV !== 'production'
  ? require('./build/webpack.dev.config.js')
  : require('./build/webpack.prod.config.js');

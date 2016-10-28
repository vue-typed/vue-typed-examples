var webpack = require('webpack')

module.exports = {
  entry: ['./src/index.js'],

  output: {
    // output to './dist' folder 
    path: './dist',

    // with filename
    filename: 'bundle.js',

    // mark /dist/ folder as a public path so index.html can reach it
    publicPath: '/dist/'
  },

  // webpack-dev-server config, see: https://webpack.github.io/docs/webpack-dev-server.html
  devServer: {
    contentBase: './',
    hot: true,
    inline: true,
    port: 4040
  },

  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js'],
    alias: {
      'vue$': 'vue/dist/vue.js'
    }
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', query: { presets: ['es2015'], plugins: ['transform-decorators-legacy']} },
      { test: /\.html$/, loader: 'html' }
    ]
  },

  plugins: [
    // HMR issue, see: https://github.com/webpack/webpack/issues/1151
    new webpack.HotModuleReplacementPlugin()
  ]

}

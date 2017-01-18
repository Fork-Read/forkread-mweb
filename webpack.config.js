
const ExtractTextPlugin   = require("extract-text-webpack-plugin");
const path                = require('path');

const PATHS = {
  app: path.resolve(__dirname, 'app'),
  build: path.resolve(__dirname, 'build')
};

module.exports = {
  // Entry accepts a path or an object of entries.
  // We'll be using the latter form given it's
  // convenient with more complex configurations.
  //
  // Entries have to resolve to files! It relies on Node.js
  // convention by default so if a directory contains *index.js*,
  // it will resolve to that.
  entry: {
    app: PATHS.app
  },
  output: {
    path: PATHS.build,
    filename: 'build.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style-loader", "sass-loader", "css-loader")
      }
    ]
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, "assets/stylesheets")]
  },
  plugins: [
    new ExtractTextPlugin("styles.css")
  ]
};
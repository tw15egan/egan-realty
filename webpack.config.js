const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const validate = require('webpack-validator');
const autoprefixer = require('autoprefixer');

// HMR Config
const parts = require('./libs/parts.js');

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'app/dist')
}

const common = {
  entry: {
    app: PATHS.app
  },
  output: {
    path: PATHS.build,
    // publicPath: '/egan-realty/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.svg$/,
        loader: 'svg-url-loader'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false',
        ],
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        include: PATHS.app,
        loaders: ['style-loader', 'css-loader?sourceMap', 'postcss-loader', 'sass-loader?sourceMap']
      }
    ]
  },
  postcss: function () {
        return [autoprefixer];
  },
  resolve: {
    extensions: ['', '.js', '.json', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Egan Realty',
      template: 'app/views/index.html',
    })
  ]
};

var config;

switch(process.env.npm_lifecycle_event) {
  case 'build':
    config = merge(
      common,
      {
        devtool: 'cheap-module-source-map'
      },
      parts.minify()
    );
    break;
  default:
    config = merge(
      common,
      {
        devtool: 'eval-source-map'
      },
      parts.devServer({
        // Customize host/port here if needed
        host: process.env.HOST,
        port: process.env.PORT
      })
  );
}

module.exports = config;

const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const validate = require('webpack-validator');

// HMR Config
const parts = require('./libs/parts.js');

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'app/dist')
}

const common = {
  entry: ['webpack/hot/dev-server', PATHS.app],
  output: {
    path: PATHS.build,
    publicPath: '/egan-realty/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
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
        loaders: ['style', 'css?sourceMap', 'sass?sourceMap']
      },
      {
        test: /\.(png|jpg|jpeg)$/,
        loader: 'url-loader'
      },
      {
        test: /\.svg/, 
        loader: 'svg-url-loader'
      }
    ]
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
        devtool: 'source-map'
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

module.exports = validate(config);
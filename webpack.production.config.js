const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require("script-ext-html-webpack-plugin");
const path = require('path');
require('babel-polyfill');

const PublicPath = "/";
const Template = path.join(__dirname, 'src/template', 'index.html');

const config = {
  devtool: 'source-map',
  entry: {
      polyfill: ['babel-polyfill'],
      vendor: ['react', 'react-dom', 'react-router-dom', 'react-fontawesome', 'immutable', 'redux', 'redux-thunk'],
      app: path.resolve(__dirname, 'src/index.js')
  },
  output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: PublicPath,
      filename: 'asset/js/[name].bundle.js',
      chunkFilename: 'asset/js/[name].[chunkhash].js'
  },
    resolve: {
        extensions: ['.js', '.json', '.css', '.scss', '.less', 'jsx']
    },
    module: {
      rules: [{
              test: /\.(js|jsx)$/,
              use: 'babel-loader',
              exclude: /node_modules/
          },
          {
              test: /\.scss$/,
              use: ExtractTextPlugin.extract({
                  fallback: "style-loader",
                  use: [
                      { loader: "css-loader?sourceMap" },
                      { loader: 'sass-loader?sourceMap' }
                  ]
              }),
          },
          {
              test: /\.less$/,
              use: [
                  { loader: "style-loader" }, 
                  { loader: "css-loader" }, 
                  { loader: "less-loader" }
              ]
          },
          {
              test: /\.css$/,
              use: [
                  { loader: "style-loader" }, 
                  { loader: "css-loader" }
              ]
          },
          {
              test: /\.svg$/,
              use: [{
                    loader: "svg-loader"
               }]
           },
           {
                test: /\.(png|jpg|gif|jpeg)$/,
                use: [{
                    loader: "url-loader",
                    options: {
                        limit: 8192,
                        name: "./static/img/[name].[hash:4].[ext]"
                    }
                }],
                exclude: /node_modules/
            },
          {
              test: /\.json$/,   
              use: 'json-loader'
          }
      ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true
    }),
    new HtmlWebpackPlugin({
        title: 'bundle',
        template: Template,
        inject: 'body',
        filename: path.join(__dirname, 'dist', 'index.html')
    }),
    new ScriptExtHtmlWebpackPlugin({
        defer: 'app',
        defaultAttribute: 'sync'
    }),
    new webpack.LoaderOptionsPlugin({
        minimize: true
    }),
    new webpack.optimize.CommonsChunkPlugin({
        names: ['vendor', 'polyfill', 'manifest'],
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    })
  ]
}

module.exports = config;

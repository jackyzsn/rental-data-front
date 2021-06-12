const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const outputDirectory = 'dist';
const apiMocker = require('connect-api-mocker');

module.exports = (env) => {
  return {
    // mode: 'development',
    // devtool: 'source-map',
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
    },
    entry: ['./src/index.js'],
    output: {
      path: path.join(__dirname, outputDirectory),
      filename: 'myapp.[contenthash].js',
      publicPath: '',
      clean: true
    },
    devServer: {
      hot: true,
      watchContentBase: true,
      historyApiFallback: true,
      contentBase: [path.resolve(__dirname, 'public'), path.resolve(__dirname, 'build')],
      publicPath: '/',
      after: function (app) {
        app.use('/api', apiMocker('mocks/api'));
      },
      port: 3000
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ['babel-loader', 'eslint-loader']
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'assets/images'
              }
            }
          ]
        },
        {
          test: /\.(woff|woff2|eot|ttf)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 100000
              }
            }
          ]
        }
      ]
    },
    resolve: {
      alias: {
        app: path.resolve(__dirname, 'src/')
      }
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
        favicon: './public/favicon.ico'
      }),
      new CopyWebpackPlugin({ patterns: [{ from: 'public/assets', to: 'assets' }] })
    ]
  };
};

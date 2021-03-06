let path = require('path');
let webpack = require('webpack');
let HtmlPlugin = require('webpack-html-plugin');
let HasteResolverPlugin = require('haste-resolver-webpack-plugin');

let IP = '127.0.0.1';
let PORT = 3000;
let NODE_ENV = process.env.NODE_ENV;
let ROOT_PATH = path.resolve(__dirname, '..');
let PROD = 'production';
let DEV = 'development';
const isProd = NODE_ENV === 'production';

let config = {
  paths: {
    src: path.join(ROOT_PATH, '.'),
    index: path.join(ROOT_PATH, 'web/index'),
  },
};

module.exports = {
  ip: IP,
  port: PORT,
  devtool: 'cheap-module-eval-source-map',
  resolve: {
    alias: {
      'react-native': 'ReactWeb',
    },
    extensions: ['', '.js', '.web.js', '.ios.js', '.android.js', '.jsx'],
  },
  entry: isProd
    ? ['babel-polyfill', config.paths.index]
    : [
        'babel-polyfill',
        `webpack-dev-server/client?http://${IP}:${PORT}`,
        'webpack/hot/only-dev-server',
        config.paths.index,
      ],
  output: {
    publicPath: '',
    path: path.join(__dirname, 'output'),
    filename: 'bundle.js',
  },
  plugins: [
    new HasteResolverPlugin({
      platform: 'web',
      nodeModules: ['react-web'],
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(isProd ? PROD : DEV),
      },
      __DEV__: !isProd,
    }),
    isProd
      ? new webpack.ProvidePlugin({
          React: 'react',
        })
      : new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json',
      },
      {
        test: /\.jsx?$/,
        loader: 'react-hot/webpack',
        include: [config.paths.src],
        exclude: [/node_modules/],
      },
      {
        test: /\.jsx?$/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react', 'stage-1'],
        },
        include: [config.paths.src],
        exclude: [
          /(node_modules\/(?!react))/,
          path.join(
            ROOT_PATH,
            'node_modules/react-native-html-render/lib/htmlparser2.js',
          ),
        ],
      },
      {
        test: /\.(png|gif|svg|jpg)$/,
        loader: 'url-loader?limit=8192',
      },
    ],
  },
};

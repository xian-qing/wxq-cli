const path = require('path');
const merge = require('webpack-merge');
const CommCfg = require('./base.config.js');
const APP_PATH = path.join(__dirname, '..');
const AppCfg = require('./config');
const proxyObj = require('./proxy')
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const devConfig = {
  devtool: 'inline-source-map',
  entry: {
    app: [
      'react-hot-loader/patch',
      path.join(APP_PATH, 'src/index.js')
    ]
  },
  output: {
    filename: '[name].[hash].js',
  },
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader', options: {
              sourceMap: true, modules: true,
              importLoaders:1,
              //localIdentName: '[local]_[hash:base64:5]'
              localIdentName: '[local]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: {
                path: 'postcss.config.js'
              }
            }
          },
          {
            loader: 'sass-loader', options: { sourceMap: true }
          }
        ]
      }
    ]
  },
  plugins: [
    //new OpenBrowserPlugin({ url: 'http://localhost:8080' }),
    new FriendlyErrorsWebpackPlugin(),
  ],
  devServer: {
    port: 8080,
    proxy: proxyObj,
    clientLogLevel: "none",  //不显示log
    watchContentBase: true,
    noInfo: true,
    // contentBase: path.join(__dirname, '..', './react'),
    historyApiFallback: { index: AppCfg.app.BaseName }, // 解决进行非默认页面，刷新报404问题。
    host: '0.0.0.0'
  },
};

const mergeCfg = merge({
  customizeArray(a, b, key) {
    /**
     * entry.app不合并，全替换
     */
    if (key === 'entry.app') {
      return b;
    }
    return undefined;
  }
})(CommCfg, devConfig);

module.exports = mergeCfg;

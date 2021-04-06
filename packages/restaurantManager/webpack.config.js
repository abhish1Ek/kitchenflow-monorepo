const {merge} = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const commonConfig = require('../../buildUtils/webpack.common.js');
const createBabelLoaderConfig = require('../../buildUtils/createBabelLoaderConfig');

const babelLoaderConfiguration = createBabelLoaderConfig({
  omitPackages: [],

  // Add every directory that needs to be compiled by Babel during the build.
  include: [
    path.resolve(__dirname, 'index.web.js'), // Entry to your application
    path.resolve(__dirname, 'App.web.tsx'), // Change this to your main App file
    path.resolve(__dirname, 'src'),
  ],
  compileNodeModules: [
    // Add every react-native package that needs compiling
    // 'react-native-gesture-handler',
  ],
});

const config = {
  entry: {
    app: path.join(__dirname, 'index.web.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'rnw_kitchenflow_restaurantManager.bundle.js',
  },

  module: {
    rules: [babelLoaderConfiguration],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'index.html'),
    }),
  ],
  devServer: {
    port: 3001,
  },
};

module.exports = ({env}) => {
  return merge(commonConfig, config);
};

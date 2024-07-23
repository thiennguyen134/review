const { override, overrideDevServer } = require('customize-cra');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

const webpackConfig = () => (config) => {
  config.resolve.fallback = {
    crypto: require.resolve('crypto-browserify'),
    stream: require.resolve('stream-browserify'),
    assert: require.resolve('assert'),
    http: require.resolve('stream-http'),
    https: require.resolve('https-browserify'),
    os: require.resolve('os-browserify/browser'),
    url: require.resolve('url'),
  };
  config.plugins.push(new NodePolyfillPlugin());
  return config;
};

const devServerConfig = () => (config) => {
  config.setupMiddlewares = (middlewares, devServer) => {
    // Add your custom middlewares here
    return middlewares;
  };
  return config;
};

module.exports = {
  webpack: override(webpackConfig()),
  devServer: overrideDevServer(devServerConfig()),
};

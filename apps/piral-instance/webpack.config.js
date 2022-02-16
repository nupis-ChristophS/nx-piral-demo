const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = function (config) {
  config.watchOptions = {
    ignored: /node_modules/,
  };

  config.resolve.plugins = config.resolve.plugins ?? [];
  config.resolve.plugins.push(new TsconfigPathsPlugin());

  return config;
};

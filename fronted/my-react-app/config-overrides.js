const webpack = require("webpack");

module.exports = function override(config) {
  config.resolve.fallback = {
    assert: require.resolve("assert/"),
    url: require.resolve("url/"),
    buffer: require.resolve("buffer/"),
    stream: require.resolve("stream-browserify"),
    util: require.resolve("util/"),
    process: require.resolve("process/browser"),
  };

  config.plugins.push(
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
    })
  );

  return config;
};

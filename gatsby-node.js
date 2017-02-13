const path = require('path');

exports.modifyWebpackConfig = (webpackConfig) => {
  webpackConfig.loader('sass', (cfg) => {
    const config = cfg;
    config.test = /\.(sass|scss)/;
    config.loader = 'style!css!postcss!sass';
    config.exclude = [
      /\.module\.(sass|scss)$/,
      path.resolve('node_modules/office-ui-fabric-react/lib')
    ];
    return config;
  });
  return webpackConfig;
};

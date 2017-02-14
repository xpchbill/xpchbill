import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

exports.modifyWebpackConfig = (webpackConfig, env) => {
  webpackConfig.loader('source-map-loader', (cfg) => {
    const config = cfg;
    config.test = /\.js$/;
    config.loader = 'source-map-loader';
    return config;
  });
  webpackConfig.loader('sass', (cfg) => {
    const config = cfg;
    config.test = /\.(sass|scss)/;
    switch (env) {
      case 'develop':
        config.loader = 'style!css!postcss!sass';
        config.exclude = [
          /\.module\.(sass|scss)$/,
          path.resolve('node_modules/office-ui-fabric-react/lib')
        ];
        break;
      case 'build-javascript':
        config.test = /\.scss$/;
        config.loader = 'null';
        break;
      default:
        break;
    }
    return config;
  });
  return webpackConfig;
};

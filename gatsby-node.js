import path from 'path';

exports.modifyWebpackConfig = (webpackConfig, env) => {
  webpackConfig.merge({
    resolve: {
      modulesDirectories: ['src']
    }
  });

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
  webpackConfig.loader('file-loader', (cfg) => {
    const config = cfg;
    config.test = /\.(eot|ttf|svg|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/;
    config.loader = 'file?name=assets/fonts/[name].[ext]';
    return config;
  });
  webpackConfig.loader('images', (cfg) => {
    const config = cfg;
    config.test = /\.(png|jpg|gif|svg)$/;
    config.loader = 'file?name=assets/images/[name].[ext]';
    return config;
  });
  return webpackConfig;
};

import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1608517683461_2353';

  // add your egg config in here
  config.middleware = [];

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
// 配置 graphql
exports.graphql = {
  router: '/graphql',
  // 是否创建默认的空 schema
  defaultEmptySchema: false,
  // 是否加载开发者工具 (playground), 默认开启, 路由同 router 字段, 使用浏览器打开该可见
  playground: true,
};

// 使用 graphql 插件，拦截请求
exports.middleware = [ 'graphql' ];

import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },
};
exports.graphql = {
  enable: true,
  package: 'egg-plugin-graphql',
};
export default plugin;

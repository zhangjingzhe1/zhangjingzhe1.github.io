import { defineConfig } from 'umi';
import Router from './src/router.js';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: Router,
  fastRefresh: {},
  proxy: {
    '/api': {
      target: 'http://www.zhangjingzhe.net/api',
      pathRewrite: { '^/api': '' },
      changeOrigin: true
    }
  },
  cssLoader: {
    localsConvention: 'camelCase',
  },
});

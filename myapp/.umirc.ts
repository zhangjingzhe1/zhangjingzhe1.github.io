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
      target: 'http://localhost:5000/api',
      pathRewrite: { '^/api': '' },
      changeOrigin: true
    }
  },
  cssLoader: {
    localsConvention: 'camelCase',
  },
});

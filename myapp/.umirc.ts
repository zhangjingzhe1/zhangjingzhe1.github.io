import { defineConfig } from 'umi';
import Router from './src/router.js';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  history: {type: 'hash'},
  routes: Router,
  fastRefresh: {},
  proxy: {
    '/api': {
      target: 'http://localhost:5000/api',
      pathRewrite: { '^/api': '' },
      changeOrigin: true
    }
  },
  outputPath: "../",
  cssLoader: {
    localsConvention: 'camelCase',
  },
});

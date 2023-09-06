import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: './Home',
    },
  ],
  fastRefresh: {},
  ssr: {},
  exportStatic: {},
});

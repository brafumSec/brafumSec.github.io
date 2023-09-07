import { defineConfig } from 'umi';

export default defineConfig({
  title: "Xuewei's Homepage",
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

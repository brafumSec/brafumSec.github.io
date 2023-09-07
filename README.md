# Homepage

## 修改模块数据

`src/data`
```
src/data
├── nav.ts
├── intro.ts
├── about.ts
├── publications.ts
├── chinesePublications.ts
├── awards.ts
└── acknowledgements.ts
```

## 修改头像

`src/assets`

```
src/assets/fxw.png
```

## 修改页面标题

`.umirc.ts`

```js
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

```

## Getting Started

Install dependencies,

```bash
$ npm install
```

Start the dev server,

```bash
$ npm start
```
Build packages

```bash
$ npm run build
```

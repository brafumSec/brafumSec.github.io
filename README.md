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

## 修改 intro 模块

`src/data/intro.tsx` 在 items 队列中增减项即可：

```js
export default {
  title: 'Feng Xuewei, Ph.D.',
  items: [
    {
      key: '1',  // 保证唯一就行
      label: 'email', // 标签名
      children: <a href="mailto:fengxw06@126.com">fengxw06@126.com</a>, // 支持 HTML 形式
      span:3, // 包含列的数量，用于控制是否占用单行等
      labelStyle: {}, // 用于控制 label 样式
      contentStyle: {} // 用于控制 children 样式
    },
    {
      key: '2',
      label: 'research',
      children: "Network and Information Security",
    },
  ]
}
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

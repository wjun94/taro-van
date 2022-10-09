---
title: FAQ
group:
  path: /开发指南
  title: 开发指南
  order: 1
nav:
  title: FAQ
  order: 4
---

# FAQ

### 报错

```js
[WXML Runtime warning] ./base.wxml
 Template `tmpl_0_View` not found.
  83 |
  84 | <template name="tmpl_0_container">
> 85 |   <template is="{{xs.a(0, i.nn, l)}}" data="{{i:i,cid:0,l:xs.f(l,i.nn)}}" />
     |                ^
  86 | </template>
  87 |
  88 | <template name="tmpl_1_catch-view">
```

在`config/index.js`中添加如下代码

```js
compiler: {
  type: 'webpack5',
  prebundle: {
    exclude: ['taro-van'],
  },
},
```

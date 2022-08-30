---
title: 定制主题
group:
  path: /开发指南
  title: 开发指南
  order: 1
nav:
  title: 定制主题
  order: 3
---

# 定制主题

## Taro Van 的样式变量

```css
--tv-color-primary: #4338ca; // 全局主色
--tv-color-success: #00c852; // 成功色
--tv-color-danger: #dc2626; // 错误色
--tv-color-warning: #fbbf24; // 警告色
--tv-color-secondary: #969799; // 次文本色
--tv-color-base: #323232; // 主字号
--tv-color-border: rgba(0, 0, 0, 0.14); // border 颜色
```

## 定制方式

### 微信小程序

在入口 css 文件添加如下代码：

```css
page {
  --tv-color-primary: #1da57a;
}
```

### h5

在入口文件/src/app.tsx 添加如下代码：

```js
import { View } from '@tarojs/components';

const App = ({ children }) => {
  return <View style={{ '--tv-color-primary': '#1DA57A' }}>{children}</View>;
};

export default App;
```

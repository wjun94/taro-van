## 介绍

[Taro Van](https://wjun94.github.io/taro-van/%E5%BC%80%E5%8F%91%E6%8C%87%E5%8D%97/quickstart) 是一款基于 [Taro](https://nervjs.github.io/taro/docs) 框架开发的多端 UI 组件库

# 快速上手

## 通过 npm 安装

在现有项目中使用 Taro-Van 时，可以通过 npm 进行安装：

```bash
npm i taro-van
```

当然，你也可以通过 yarn 或 pnpm 进行安装：

```bash
# 通过 yarn 安装
yarn add taro-van

# 通过 pnpm 安装
pnpm add taro-van
```

## 引入组件

### 方式一：手动按需引入

```jsx | pure
import Button from 'taro-van/lib/src/components/button';
import 'taro-van/lib/styles/components/button.less';
```

### 方式二：导入所有组件样式

在入口文件引入`taro-van`的所有样式。

```jsx | pure
import 'taro-van/lib/styles/index.less';
```

## 解决样式引入问题

在 config/index.js 文件中添加如下代码：

```js
const config = {
  ...
  h5: {
    esnextModules: ['taro-van'],
  }
  ...
}
```

## 示例

```jsx | pure
import { View } from '@tarojs/components';
import { Button } from 'taro-van';

export default () => {
  return (
    <View className='wrapper'>
      <Button type='primary'>按钮</Button>
    </View>
  );
};
```

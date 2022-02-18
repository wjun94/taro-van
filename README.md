## 介绍

Taro Van 是一款基于 [Taro](https://nervjs.github.io/taro/docs) 框架开发的多端 UI 组件库

> Taro Van 正处于开发阶段，可能会出现重大改动，请谨慎使用。

## 快速上手

### 通过 npm 安装

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

### 引入组件

#### 方式一：手动按需引入

```jsx | pure
import Button from 'taro-van/lib/src/components/button';
import 'taro-van/lib/styles/components/button.less';
```

#### 方式二：导入所有组件样式

在入口文件引入`taro-van`的所有样式。

```jsx | pure
import 'taro-van/lib/styles/index.less';
```

页面中使用组件。

```jsx | pure
import { Button } from 'taro-van';
```

### 示例

```jsx |pure
import { View } from '@tarojs/components';
import { Button } from 'taro-van';

const Index = () => {
  return (
    <View className='wrapper'>
      <Button type='primary'>按钮</Button>
    </View>
  );
};

export default Index;
```

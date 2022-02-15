陆续完善中...

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

```jsx
import Button from 'taro-van/lib/src/components/button';
import 'taro-van/lib/styles/components/button.less';
```

### 方式二：导入所有组件样式

```jsx
import { Button } from 'taro-van';
import 'taro-van/lib/styles/index.less';
```
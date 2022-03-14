import { View } from '@tarojs/components';
import { navigateTo } from '@tarojs/taro';
import Cell from '../../components/cell';

import './index.less';

const Index = () => {
  const items = [
    {
      label: 'Button 按钮',
      url: '/pages/button/index',
    },
    {
      label: 'Flex 布局',
      url: '/pages/flex/index',
    },
    {
      label: 'Card 卡片',
      url: '/pages/card/index',
    },
    {
      label: 'Typography排版',
      url: '/pages/typography/index',
    },
    {
      label: 'Overlay遮罩层',
      url: '/pages/overlay/index',
    },
    {
      label: 'Dialog弹出框',
      url: '/pages/dialog/index',
    },
    {
      label: 'Field按钮',
      url: '/pages/field/index',
    },
    {
      label: 'Cell单元格',
      url: '/pages/cell/index',
    },
    {
      label: 'Form表单',
      url: '/pages/form/index',
    },
    {
      label: 'Radio单选框',
      url: '/pages/radio/index',
    },
    {
      label: 'Uploader上传',
      url: '/pages/uploader/index',
    },
    {
      label: 'Icon图标',
      url: '/pages/icon/index',
    },
    {
      label: 'Loading加载',
      url: '/pages/loading/index',
    },
  ];
  return (
    <View className='example-index'>
      {items.map((item) => (
        <Cell
          key={item.url}
          onClick={() => navigateTo({ url: item.url })}
          title={item.label}
          isLink
        />
      ))}
    </View>
  );
};

export default Index;

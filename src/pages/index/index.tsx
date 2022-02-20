import { View, Text } from '@tarojs/components';
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

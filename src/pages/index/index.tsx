import { View, Text } from '@tarojs/components';
import { navigateTo } from '@tarojs/taro';

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
  ];
  return (
    <View className='wrapper'>
      {items.map((item) => (
        <Text onClick={() => navigateTo({ url: item.url })} key={item.url}>
          {item.label}
        </Text>
      ))}
    </View>
  );
};

export default Index;

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
    {
      label: 'Typography排版',
      url: 'pages/typography/index',
    },
  ];
  return (
    <View className='example-index'>
      {items.map((item) => (
        <Text onClick={() => navigateTo({ url: item.url })} key={item.url}>
          {item.label}
        </Text>
      ))}
    </View>
  );
};

export default Index;

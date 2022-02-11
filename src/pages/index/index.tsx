import { View } from '@tarojs/components';
import Button from '../../components/button';

import './index.less';

const Index = () => {
  return (
    <View className="wrapper">
      <Button type="primary">主要按钮</Button>
      <Button type="info">信息按钮</Button>
      <Button type="danger">危险按钮</Button>
      <Button type="default">默认按钮</Button>
      <Button type="warning">警告按钮</Button>
    </View>
  );
};

export default Index;

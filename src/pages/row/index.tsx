import { View } from '@tarojs/components';
import Row from '../../components/row';
import Typography from '../../components/typography';

import './index.less';

const Index = () => {
  return (
    <View className='pt-20'>
      <Typography.Title className='pl-20 pt-20' level={3}>
        Align
      </Typography.Title>
      <Row />
    </View>
  );
};

export default Index;

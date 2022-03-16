import { View } from '@tarojs/components';
import Tabs from '../../components/tabs';
import Typography from '../../components/typography';
import './index.less';

const Index = () => {
  return (
    <View className='p-20'>
      <Typography.Text type='secondary' block className='my-title'>
        基础用法
      </Typography.Text>
      <Tabs>
        <Tabs.Tab title='水果' key='fruits'>
          菠萝
        </Tabs.Tab>
      </Tabs>
    </View>
  );
};

export default Index;

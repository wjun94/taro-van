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
      <Tabs activeKey='fruits2'>
        <Tabs.Tab title='水果' value='fruits1' />
        <Tabs.Tab title='菠萝333333' value='fruits2' />
        <Tabs.Tab title='苹果' disabled value='fruits3' />
      </Tabs>
    </View>
  );
};

export default Index;

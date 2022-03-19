import { View } from '@tarojs/components';
import Tabs from '../../components/tabs';
import Typography from '../../components/typography';
import './index.less';

const Index = () => {
  return (
    <>
      <View className='p-20'>
        <Typography.Text type='secondary' block className='my-title'>
          基础用法
        </Typography.Text>
        <Tabs name='one' activeKey='fruits2'>
          <Tabs.Tab title='水果1' value='fruits1' />
          <Tabs.Tab title='菠萝333333' value='fruits2' />
          <Tabs.Tab title='水果3' value='fruits3' />
          <Tabs.Tab title='水果4' value='fruits4' />
          <Tabs.Tab title='水果5' value='fruits5' />
          <Tabs.Tab title='水果6' value='fruits6' />
          <Tabs.Tab title='水果7' value='fruits7' />
        </Tabs>
      </View>

      <Tabs name='two'>
        <Tabs.Tab title='水果1' value='fruits1' />
        <Tabs.Tab title='菠萝333333' value='fruits2' />
        <Tabs.Tab title='水果3' value='fruits3' />
        <Tabs.Tab title='水果4' value='fruits4' />
        <Tabs.Tab title='水果5' value='fruits5' />
        <Tabs.Tab title='水果6' value='fruits6' />
        <Tabs.Tab title='水果7' value='fruits7' />
      </Tabs>
    </>
  );
};

export default Index;

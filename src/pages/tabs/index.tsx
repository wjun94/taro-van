import { View } from '@tarojs/components';
import Tabs from '../../components/tabs';
import Typography from '../../components/typography';
import './index.less';

const Index = () => {
  return (
    <>
      <Typography.Text type='secondary' block className='my-title p-20'>
        基础用法
      </Typography.Text>
      <Tabs
        name='one'
        onChange={(val, idx) => console.log(val, idx)}
        defaultActiveValue='fruits2'
      >
        <Tabs.Tab title='水果' value='fruits1'>
          <View className='bg-white'>
            <Typography.Text>苹果</Typography.Text>
          </View>
        </Tabs.Tab>
        <Tabs.Tab title='蔬菜' value='fruits2'>
          <View className='bg-white'>
            <Typography.Text>青菜</Typography.Text>
          </View>
        </Tabs.Tab>
        <Tabs.Tab title='动物' value='fruits3'>
          <View className='bg-white'>
            <Typography.Text>小狗</Typography.Text>
          </View>
        </Tabs.Tab>
      </Tabs>

      <Typography.Text type='secondary' block className='my-title p-20'>
        禁用
      </Typography.Text>
      <Tabs name='two'>
        <Tabs.Tab title='水果' value='fruits1' />
        <Tabs.Tab title='蔬菜' value='fruits2' />
        <Tabs.Tab title='动物' value='fruits3' disabled />
      </Tabs>

      <Typography.Text type='secondary' block className='my-title p-20'>
        超长
      </Typography.Text>
      <Tabs name='three'>
        <Tabs.Tab title='水果' value='fruits1' />
        <Tabs.Tab title='蔬菜' value='fruits2' />
        <Tabs.Tab title='动物' value='fruits3' />
        <Tabs.Tab title='芒果' value='fruits4' />
        <Tabs.Tab title='香蕉' value='fruits5' />
        <Tabs.Tab title='苹果' value='fruits6' />
        <Tabs.Tab title='菠萝' value='fruits7' />
        <Tabs.Tab title='柠檬' value='fruits8' />
      </Tabs>
    </>
  );
};

export default Index;

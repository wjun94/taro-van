import { View } from '@tarojs/components';
import { Typography, IndexBar } from '../../index';
import './index.less';

const Index = () => {
  return (
    <View>
      <Typography.Text type='secondary' block className='my-title'>
        基本用法
      </Typography.Text>
      <IndexBar>
        <IndexBar.Panel title='123213'>
          <Typography.Text>123123123</Typography.Text>
        </IndexBar.Panel>
      </IndexBar>
    </View>
  );
};

export default Index;

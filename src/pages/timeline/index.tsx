import { View } from '@tarojs/components';
import { Timeline } from '../../index';
import Typography from '../../components/typography';
import Icon from '../../components/icon';
import './index.less';

const Index = () => {
  return (
    <View>
      <Typography.Text type='secondary' block className='my-title'>
        基本用法
      </Typography.Text>
      <Timeline className='px-24px'>
        <Timeline.Item>测试</Timeline.Item>
        <Timeline.Item borderStyle='dashed'>111</Timeline.Item>
        <Timeline.Item dot={<Icon icon='icon-planet' />}>111</Timeline.Item>
      </Timeline>

      <Typography.Text type='secondary' block className='my-title'>
        水平显示
      </Typography.Text>
      <Timeline direction='horizontal' className='px-24px'>
        <Timeline.Item>测试</Timeline.Item>
        <Timeline.Item borderStyle='dashed'>111</Timeline.Item>
        <Timeline.Item dot={<Icon icon='icon-planet' />}>111</Timeline.Item>
      </Timeline>
    </View>
  );
};

export default Index;

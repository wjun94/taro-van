import { View } from '@tarojs/components';
import Typography from '../../components/typography';
import Stepper from '../../components/stepper';
import './index.less';

const Index = () => {
  return (
    <View className='p-20'>
      <View>
        <Typography.Text type='secondary' block className='my-title'>
          基础用法
        </Typography.Text>
        <Stepper min={1} max={9} />

        <Typography.Text type='secondary' block className='my-title'>
          不可点击
        </Typography.Text>
        <Stepper disabled min={1} max={9} />

        <Typography.Text type='secondary' block className='my-title'>
          2位小数
        </Typography.Text>
        <Stepper digits={2} />
      </View>
    </View>
  );
};

export default Index;

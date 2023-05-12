import { View } from '@tarojs/components';
import Typography from '../../components/typography';
import Switch from '../../components/switch';

const Index = () => {
  return (
    <View className='p-20'>
      <View>
        <Typography.Text type='secondary' block className='my-title'>
          基本用法
        </Typography.Text>
        <Switch />
      </View>

      <View>
        <Typography.Text type='secondary' className='my-title'>
          默认值
        </Typography.Text>
      </View>
      <Switch />
    </View>
  );
};

export default Index;

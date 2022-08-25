import { View } from '@tarojs/components';
import Typography from '../../components/typography';
import Spin from '../../components/spin';
import './index.less';

const Index = () => {
  return (
    <View className='p-20'>
      <View>
        <Typography.Text type='secondary' block className='my-title'>
          基本图标
        </Typography.Text>
        <Typography.Text type='secondary' block className='my-title'>
          加载大小
        </Typography.Text>
        <Spin>
          <View>
            <View>
              <Typography.Text>111</Typography.Text>
            </View>
            <View>
              <Typography.Text>111</Typography.Text>
            </View>
            <View>
              <Typography.Text>111</Typography.Text>
            </View>
          </View>
        </Spin>
        <View>
          <Typography.Text>222</Typography.Text>
        </View>
        <Spin />
      </View>
    </View>
  );
};

export default Index;

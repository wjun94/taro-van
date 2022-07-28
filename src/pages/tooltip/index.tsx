import { View } from '@tarojs/components';
import Typography from '../../components/typography';
import Tooltip from '../../components/tooltip';
import Flex from '../../components/flex';

const Index = () => {
  return (
    <View className='p-20'>
      <Typography.Text type='secondary' block className='my-title'>
        基础用法
      </Typography.Text>
      <Flex>
        <Tooltip title='prompt text' className='mr-20'>
          <Typography.Text>底部显示</Typography.Text>
        </Tooltip>

        <Tooltip placement='top' title='prompt text'>
          <Typography.Text>顶部显示</Typography.Text>
        </Tooltip>
      </Flex>
    </View>
  );
};

export default Index;

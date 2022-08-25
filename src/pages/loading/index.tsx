import { View } from '@tarojs/components';
import Typography from '../../components/typography';
import Loading from '../../components/loading';
import Flex from '../../components/flex';
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
        <Flex align='end'>
          <Flex
            className='example-loading__box__size'
            direction='column'
            align='center'
          >
            <Loading />
          </Flex>
        </Flex>
      </View>
    </View>
  );
};

export default Index;

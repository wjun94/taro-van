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
          图标大小
        </Typography.Text>
        <Flex align='end'>
          <Flex
            className='example-loading__box__size'
            direction='column'
            align='center'
          >
            <Loading size='sm' />
            <Typography.Text type='secondary' size='sm'>
              sm
            </Typography.Text>
          </Flex>
          <Flex
            className='example-loading__box__size'
            direction='column'
            align='center'
          >
            <Loading size='base' />
            <Typography.Text type='secondary' size='sm'>
              base
            </Typography.Text>
          </Flex>
          <Flex
            className='example-loading__box__size'
            direction='column'
            align='center'
          >
            <Loading size='lg' />
            <Typography.Text type='secondary' size='sm'>
              lg
            </Typography.Text>
          </Flex>
          <Flex
            className='example-loading__box__size'
            direction='column'
            align='center'
          >
            <Loading size='xl' />
            <Typography.Text type='secondary' size='sm'>
              xl
            </Typography.Text>
          </Flex>
          <Flex
            className='example-loading__box__size'
            direction='column'
            align='center'
          >
            <Loading size='xxl' />
            <Typography.Text type='secondary' size='sm'>
              xxl
            </Typography.Text>
          </Flex>
        </Flex>
      </View>
    </View>
  );
};

export default Index;

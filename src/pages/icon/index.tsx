import { View } from '@tarojs/components';
import Typography from '../../components/typography';
import Icon from '../../components/icon';
import Flex from '../../components/flex';
import './index.less';

const Index = () => {
  return (
    <View className='p-20'>
      <View>
        <Typography.Text type='secondary' block className='my-title'>
          基本图标
        </Typography.Text>
        <Flex justify='around'>
          <Flex className='example-icon__box' direction='column' align='center'>
            <Icon icon='icon-cross' />
            <Typography.Text type='secondary' size='sm'>
              icon-cross
            </Typography.Text>
          </Flex>
          <Flex className='example-icon__box' direction='column' align='center'>
            <Icon icon='icon-plus' />
            <Typography.Text type='secondary' size='sm'>
              icon-plus
            </Typography.Text>
          </Flex>
          <Flex className='example-icon__box' direction='column' align='center'>
            <Icon icon='icon-close' />
            <Typography.Text type='secondary' size='sm'>
              icon-close
            </Typography.Text>
          </Flex>
          <Flex className='example-icon__box' direction='column' align='center'>
            <Icon icon='icon-camera' />
            <Typography.Text type='secondary' size='sm'>
              icon-camera
            </Typography.Text>
          </Flex>
          <Flex className='example-icon__box' direction='column' align='center'>
            <Icon icon='icon-arrow' />
            <Typography.Text type='secondary' size='sm'>
              icon-arrow
            </Typography.Text>
          </Flex>
          {/* <View className='example-icon__box' /> */}
        </Flex>
        <Typography.Text type='secondary' block className='my-title'>
          图标大小
        </Typography.Text>
        <Flex align='end'>
          <Flex
            className='example-icon__box__size'
            direction='column'
            align='center'
          >
            <Icon size='sm' icon='icon-camera' />
            <Typography.Text type='secondary' size='sm'>
              sm
            </Typography.Text>
          </Flex>
          <Flex
            className='example-icon__box__size'
            direction='column'
            align='center'
          >
            <Icon size='base' icon='icon-camera' />
            <Typography.Text type='secondary' size='sm'>
              base
            </Typography.Text>
          </Flex>
          <Flex
            className='example-icon__box__size'
            direction='column'
            align='center'
          >
            <Icon size='lg' icon='icon-camera' />
            <Typography.Text type='secondary' size='sm'>
              lg
            </Typography.Text>
          </Flex>
          <Flex
            className='example-icon__box__size'
            direction='column'
            align='center'
          >
            <Icon size='xl' icon='icon-camera' />
            <Typography.Text type='secondary' size='sm'>
              xl
            </Typography.Text>
          </Flex>
          <Flex
            className='example-icon__box__size'
            direction='column'
            align='center'
          >
            <Icon size='xxl' icon='icon-camera' />
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

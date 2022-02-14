import Typography from '../../components/typography';
import Flex from '../../components/flex';

const Index = () => {
  return (
    <Flex direction='col'>
      <Typography.Text>taro-van(default)</Typography.Text>
      <Typography.Text ellipsis type='primary'>
        taro-van(primary)taro-van(primary)taro-van(primary)taro-van(primary)taro-van(primary)taro-van(primary)taro-van(primary)taro-van(primary)taro-van(primary)taro-van(primary)taro-van(primary)taro-van(primary)
      </Typography.Text>
      <Typography.Text copyable={{ text: '复制了' }}>
        taro-van(copyable)
      </Typography.Text>
      <Typography.Title>测试1</Typography.Title>
      <Typography.Title level={2}>测试2</Typography.Title>
      <Typography.Title level={3}>测试3</Typography.Title>
      <Typography.Title level={4}>测试4</Typography.Title>
      <Typography.Link>测试4</Typography.Link>
    </Flex>
  );
};

export default Index;

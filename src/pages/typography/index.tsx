import Typography from '../../components/typography';
import Flex from '../../components/flex';

const Index = () => {
  return (
    <Flex direction='col'>
      <Typography.Text>taro-van(default)</Typography.Text>
      <Typography.Text type='primary'>taro-van(primary)</Typography.Text>
      <Typography.Text type='title'>taro-van(secondary)</Typography.Text>
      <Typography.Text copyable={{ text: '复制了' }}>
        taro-van(copyable)
      </Typography.Text>
    </Flex>
  );
};

export default Index;

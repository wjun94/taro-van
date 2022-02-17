import { View } from '@tarojs/components';
import Typography from '../../components/typography';

const Index = () => {
  return (
    <View className='p-20'>
      <Typography.Text type='secondary' className='my-title'>
        文本
      </Typography.Text>
      <View className='lh-1'>
        <Typography.Text>这是一个文本</Typography.Text>
        <Typography.Text>这是一个文本</Typography.Text>
        <Typography.Text type='danger'>这是一个文本</Typography.Text>
        <Typography.Text type='primary'>这是一个文本</Typography.Text>
        <Typography.Text>这是一个文本</Typography.Text>
        <Typography.Text>这是一个文本</Typography.Text>
      </View>

      <Typography.Text type='secondary' className='my-title'>
        文本省略
      </Typography.Text>
      <View className='lh-1'>
        <Typography.Text ellipsis>
          这是一个文本这是一个文本这是一个文本这是一个文本这是一个文本
        </Typography.Text>
      </View>

      <Typography.Text type='secondary' className='my-title'>
        标题
      </Typography.Text>
      <View>
        <Typography.Title>标题1</Typography.Title>
        <Typography.Title level={2}>标题2</Typography.Title>
        <Typography.Title level={3}>标题3</Typography.Title>
        <Typography.Title level={4}>标题4</Typography.Title>
      </View>

      <Typography.Text type='secondary' className='my-title'>
        链接
      </Typography.Text>
      <View className='lh-1'>
        <Typography.Link>链接</Typography.Link>
      </View>
    </View>
  );
};

export default Index;

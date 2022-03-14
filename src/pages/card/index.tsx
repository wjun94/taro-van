import { View } from '@tarojs/components';
import Typography from '../../components/typography';
import Card from '../../components/card';
import './index.less';

const Index = () => {
  return (
    <View>
      <Card className='mt-20' title='标题'>
        <Typography.Text>卡片内容区域</Typography.Text>
      </Card>

      <Card
        className='mt-20'
        round
        title='标题'
        extra={<Typography.Link>更多</Typography.Link>}
      >
        <Typography.Text>测试</Typography.Text>
      </Card>
    </View>
  );
};

export default Index;

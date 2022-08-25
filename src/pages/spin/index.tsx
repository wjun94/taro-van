import { View } from '@tarojs/components';
import { useState } from 'react';
import Typography from '../../components/typography';
import Spin from '../../components/spin';
import Card from '../../components/card';
import Button from '../../components/button';
import './index.less';

const Index = () => {
  const [loading, setLoading] = useState(true);
  return (
    <View className='p-20'>
      <View>
        <Typography.Text type='secondary' block className='my-title'>
          基础用法
        </Typography.Text>
        <Spin spinning={loading} />
        <Button
          size='mini'
          type='primary'
          onClick={() => setLoading((v) => !v)}
        >
          加载{loading ? '结束' : '开始'}
        </Button>

        <Typography.Text type='secondary' block className='my-title'>
          添加内容
        </Typography.Text>
        <Spin>
          <Card
            className='mt-20'
            round
            title='标题'
            extra={<Typography.Link>更多</Typography.Link>}
          >
            <Typography.Text>测试</Typography.Text>
          </Card>
        </Spin>
      </View>
    </View>
  );
};

export default Index;

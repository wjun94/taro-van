import { View } from '@tarojs/components';
import Button from '../../components/button';
import Flex from '../../components/flex';
import Typography from '../../components/typography';
import './index.less';

const Index = () => {
  return (
    <View className='px-20'>
      <Typography.Text type='secondary' className='mb-12'>
        普通用法
      </Typography.Text>
      <View>
        {[
          {
            label: '主要按钮',
            type: 'primary',
          },
          {
            label: '信息按钮',
            type: 'info',
          },
          {
            label: '危险按钮',
            type: 'danger',
          },
          {
            label: '默认按钮',
            type: 'default',
          },
          {
            label: '警告按钮',
            type: 'warning',
          },
        ].map((item) => (
          <Button className='mr-32' key={item.type} type={item.type as any}>
            {item.label}
          </Button>
        ))}
      </View>

      <Typography.Text type='secondary' className='mb-12'>
        朴素按钮
      </Typography.Text>
      <View>
        {[
          {
            label: '主要按钮',
            type: 'primary',
          },
          {
            label: '信息按钮',
            type: 'info',
          },
          {
            label: '危险按钮',
            type: 'danger',
          },
          {
            label: '默认按钮',
            type: 'default',
          },
          {
            label: '警告按钮',
            type: 'warning',
          },
        ].map((item) => (
          <Button
            className='mr-32'
            plain
            key={item.type}
            type={item.type as any}
          >
            {item.label}
          </Button>
        ))}
      </View>
    </View>
  );
};

export default Index;

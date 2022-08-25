import { View } from '@tarojs/components';
import Button from '../../components/button';
import Typography from '../../components/typography';
import './index.less';

const Index = () => {
  const items = [
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
  ];
  return (
    <View className='p-20'>
      <Typography.Text type='secondary' className='my-title'>
        基础用法
      </Typography.Text>
      <View>
        {items.map((item) => (
          <Button className='mr-32' key={item.type} type={item.type as any}>
            {item.label}
          </Button>
        ))}
      </View>

      <Typography.Text type='secondary' className='my-title'>
        朴素按钮
      </Typography.Text>
      <View>
        {items.map((item) => (
          <Button
            className='mr-32'
            plain
            key={item.type}
            type={item.type as any}
          >
            {item.label}
          </Button>
        ))}
        <Button className='mr-32' type='white' plain>
          白色按钮
        </Button>
      </View>

      <Typography.Text type='secondary' className='my-title'>
        圆形按钮
      </Typography.Text>
      <View>
        {items.map((item) => (
          <Button
            className='mr-32'
            round
            key={item.type}
            type={item.type as any}
          >
            {item.label}
          </Button>
        ))}
      </View>

      <Typography.Text type='secondary' className='my-title'>
        禁用按钮
      </Typography.Text>
      <View>
        {items.map((item) => (
          <Button
            className='mr-32'
            round
            disabled
            key={item.type}
            type={item.type as any}
          >
            {item.label}
          </Button>
        ))}
      </View>

      <Typography.Text type='secondary' className='my-title'>
        加载状态
      </Typography.Text>
      <View>
        {items.map((item) => (
          <Button
            className='mr-32'
            loading
            key={item.type}
            type={item.type as any}
          >
            {item.type === 'warning' ? '' : item.label}
          </Button>
        ))}
      </View>

      <Typography.Text type='secondary' className='my-title'>
        按钮尺寸
      </Typography.Text>
      <View>
        {[
          {
            label: '大号按钮',
            size: 'large',
          },
          {
            label: '普通按钮',
            size: 'normal',
          },
          {
            label: '小型按钮',
            size: 'small',
          },
          {
            label: '迷你按钮',
            size: 'mini',
          },
        ].map((item) => (
          <Button className='mr-32' key={item.size} size={item.size as any}>
            {item.size === 'warning' ? '' : item.label}
          </Button>
        ))}
      </View>

      <Typography.Text type='secondary' className='my-title'>
        块级元素
      </Typography.Text>
      <View>
        {[
          {
            label: '块级按钮',
          },
        ].map((item) => (
          <Button className='mr-32' key={item.label} type='primary' block>
            {item.label}
          </Button>
        ))}
      </View>
    </View>
  );
};

export default Index;

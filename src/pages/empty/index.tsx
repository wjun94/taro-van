import { View } from '@tarojs/components';
import Empty from '../../components/empty';
import Icon from '../../components/icon';
import Button from '../../components/button';
import Typography from '../../components/typography';
import './index.less';

const Index = () => {
  return (
    <View className='p-20'>
      <Typography.Text type='secondary' block className='my-title'>
        基础用法
      </Typography.Text>
      <Empty description='服务端异常' />
      <Typography.Text type='secondary' block className='my-title'>
        自定义图片
      </Typography.Text>
      <Empty
        image={<Icon icon='icon-empty' className='tv-empty__icon' size='xxl' />}
        description='数据为空'
      />
      <Typography.Text type='secondary' block className='my-title'>
        底部内容
      </Typography.Text>
      <Empty
        image={<Icon icon='icon-empty' className='tv-empty__icon' size='xxl' />}
        description='文字描述'
      >
        <Button type='primary' size='mini' className='mt-20'>
          按钮
        </Button>
      </Empty>
    </View>
  );
};

export default Index;

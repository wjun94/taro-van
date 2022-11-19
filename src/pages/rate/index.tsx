import { View } from '@tarojs/components';
import Rate from '../../components/rate';
import Typography from '../../components/typography';
import './index.less';

const Index = () => {
  return (
    <View>
      <Typography.Text type='secondary' block className='my-title'>
        基本用法
      </Typography.Text>
      <Rate size='xs' defaultValue={3} />
    </View>
  );
};

export default Index;

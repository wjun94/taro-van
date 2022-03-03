import { View } from '@tarojs/components';
import Uploader from '../../components/uploader';
import './index.less';

const Index = () => {
  return (
    <View className='p-20'>
      <Uploader maxCount={1} />
    </View>
  );
};

export default Index;

import { View } from '@tarojs/components';
import { useState } from 'react';
import Overlay from '../../components/overlay';
import Button from '../../components/button';
import './index.less';

const Index = () => {
  const [visible, setVisible] = useState(false);
  return (
    <View className='p-20'>
      <View>
        <Button type='primary' onClick={() => setVisible(true)}>
          显示遮罩
        </Button>
        <Overlay visible={visible} onClick={() => setVisible(false)} />
      </View>
    </View>
  );
};

export default Index;

import { View } from '@tarojs/components';
import { useState } from 'react';
import Overlay from '../../components/overlay';
import Button from '../../components/button';
import './index.less';

const Index = () => {
  const [visible, setVisible] = useState(false);
  const [visibleEmbedded, setVisibleEmbedded] = useState(false);
  return (
    <View className='p-20'>
      <View>
        <Button type='primary' onClick={() => setVisible(true)}>
          显示遮罩
        </Button>
        <Overlay visible={visible} onClick={() => setVisible(false)} />
      </View>
      <View>
        <Button type='primary' onClick={() => setVisibleEmbedded(true)}>
          嵌入内容
        </Button>
        <Overlay
          visible={visibleEmbedded}
          onClick={() => setVisibleEmbedded(false)}
        >
          <View className='example-overlay-container'>
            <View className='example-overlay-container_box' />
          </View>
        </Overlay>
      </View>
    </View>
  );
};

export default Index;

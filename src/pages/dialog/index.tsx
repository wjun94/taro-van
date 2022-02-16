import { View, Text } from '@tarojs/components';
import { useState } from 'react';
import Dialog from '../../components/dialog';
import Button from '../../components/button';
import './index.less';

const Index = () => {
  const [visible, setVisible] = useState(true);
  return (
    <View className='p-20'>
      <View>
        <Button type='primary' onClick={() => setVisible(true)}>
          显示遮罩
        </Button>
        <Dialog
          visible={visible}
          title='标题'
          showCancelButton
          onCancel={() => setVisible(false)}
          onConfirm={() => setVisible(false)}
        >
          <Text>测试AA</Text>
        </Dialog>
      </View>
    </View>
  );
};

export default Index;

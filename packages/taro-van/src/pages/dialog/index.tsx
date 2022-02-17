import { View } from '@tarojs/components';
import { useState } from 'react';
import Dialog from '../../components/dialog';
import Button from '../../components/button';
import Typography from '../../components/typography';
import './index.less';

const Index = () => {
  const [visible, setVisible] = useState(false);
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
          <Typography.Text>逆水行舟，不进则退。</Typography.Text>
        </Dialog>
      </View>
    </View>
  );
};

export default Index;
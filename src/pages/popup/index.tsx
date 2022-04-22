import { View } from '@tarojs/components';
import { useState } from 'react';
import Popup from '../../components/popup';
import Cell from '../../components/cell';
import Typography from '../../components/typography';
import './index.less';

const Index = () => {
  const [visible1, setVisible1] = useState(false);
  const [pos, setPos] = useState('');
  return (
    <View>
      <Typography.Text type='secondary' block className='my-title'>
        基本用法
      </Typography.Text>
      <Cell title='基本用法' isLink onClick={() => setVisible1(true)} />
      <Popup
        style={{ height: '30%' }}
        visible={visible1}
        onClose={() => setVisible1(false)}
      />

      <Typography.Text type='secondary' block className='my-title'>
        弹出位置
      </Typography.Text>
      <Cell title='顶部弹出' isLink onClick={() => setPos('top')} />
      <Cell title='底部弹出' isLink onClick={() => setPos('bottom')} />
      <Cell title='左侧弹出' isLink onClick={() => setPos('left')} />
      <Cell title='右侧弹出' isLink onClick={() => setPos('right')} />
      <Popup
        style={{ height: '30%' }}
        position={pos as any}
        visible={pos === 'top'}
        onClose={() => setPos('')}
      />
      <Popup
        style={{ height: '30%' }}
        position={pos as any}
        visible={pos === 'bottom'}
        onClose={() => setPos('')}
      />
      <Popup
        style={{ width: '30%' }}
        position={pos as any}
        visible={pos === 'left'}
        onClose={() => setPos('')}
      />
      <Popup
        style={{ width: '30%' }}
        position={pos as any}
        visible={pos === 'right'}
        onClose={() => setPos('')}
      />
    </View>
  );
};

export default Index;

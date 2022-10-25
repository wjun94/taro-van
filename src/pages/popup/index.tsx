import { View } from '@tarojs/components';
import { useState } from 'react';
import Popup from '../../components/popup';
import Cell from '../../components/cell';
import Typography from '../../components/typography';
import './index.less';

const Index = () => {
  const [visible, setVisible] = useState(false);
  const [radioVisible, setRadioVisible] = useState(false);
  const [closeVisible, setCloseVisible] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);
  const [pos, setPos] = useState('');
  return (
    <View>
      <Typography.Text type='secondary' block className='my-title'>
        基本用法
      </Typography.Text>
      <View>
        <Cell title='基本用法' isLink onClick={() => setVisible(true)} />
      </View>
      <Popup
        style={{ height: '30%' }}
        visible={visible}
        onClose={() => setVisible(false)}
      />

      <Typography.Text type='secondary' block className='my-title'>
        弹出位置
      </Typography.Text>
      <View>
        <Cell title='顶部弹出' isLink onClick={() => setPos('top')} />
        <Cell title='底部弹出' isLink onClick={() => setPos('bottom')} />
        <Cell title='左侧弹出' isLink onClick={() => setPos('left')} />
        <Cell title='右侧弹出' isLink onClick={() => setPos('right')} />
      </View>
      <Popup
        style={{ height: '30%' }}
        position='top'
        visible={pos === 'top'}
        onClose={() => setPos('')}
      />
      <Popup
        style={{ height: '30%' }}
        position='bottom'
        visible={pos === 'bottom'}
        onClose={() => setPos('')}
      />
      <Popup
        style={{ width: '30%' }}
        position='left'
        visible={pos === 'left'}
        onClose={() => setPos('')}
      />
      <Popup
        style={{ width: '30%' }}
        position='right'
        visible={pos === 'right'}
        onClose={() => setPos('')}
      />

      <Typography.Text type='secondary' block className='my-title'>
        圆角弹窗
      </Typography.Text>
      <View>
        <Cell title='圆角弹窗' isLink onClick={() => setRadioVisible(true)} />
      </View>
      <Popup
        style={{ height: '30%' }}
        round
        visible={radioVisible}
        onClose={() => setRadioVisible(false)}
      />

      <Typography.Text type='secondary' block className='my-title'>
        关闭图标
      </Typography.Text>
      <View>
        <Cell title='关闭图标' isLink onClick={() => setCloseVisible(true)} />
      </View>
      <Popup
        style={{ height: '30%' }}
        visible={closeVisible}
        closeIcon
        closeOnMaskClick={false}
        onClose={() => setCloseVisible(false)}
      />

      <Typography.Text type='secondary' block className='my-title'>
        标题弹窗
      </Typography.Text>
      <View>
        <Cell title='标题弹窗' isLink onClick={() => setTitleVisible(true)} />
      </View>
      <Popup
        style={{ height: '30%' }}
        visible={titleVisible}
        closeIcon
        title='测试'
        onClose={() => setTitleVisible(false)}
      >
        <View style={{ height: '80%', overflow: 'auto' }}>
          <Typography.Text>
            React 从诞生之初就是可被逐步采用的，因而你可以按需引入或多或少的
            React 特性。不管你是想体验下 React，用它给简单的 HTML
            页面增加一点交互，还是要开始一个完全由 React
            驱动的复杂应用，该章节内容里的链接都能帮你快速开始。无论你现在使用什么技术栈，在无需重写现有代码的前提下，通过引入
            React 来开发新功能。React 还可以使用 Node 进行服务器渲染，或使用
            React Native 开发原生移动应用。
          </Typography.Text>
        </View>
      </Popup>

      <Typography.Text type='secondary' block className='my-title'>
        Popup.Alert
      </Typography.Text>

      <Popup.Alert
        style={{ height: '30%' }}
        round
        content={
          <Typography.Text>
            React 从诞生之初就是可被逐步采用的，因而你可以按需引入或多或少的
            React 特性。不管你是想体验下 React，用它给简单的 HTML
            页面增加一点交互，还是要开始一个完全由 React
            驱动的复杂应用，该章节内容里的链接都能帮你快速开始。无论你现在使用什么技术栈，在无需重写现有代码的前提下，通过引入
            React 来开发新功能。React 还可以使用 Node 进行服务器渲染，或使用
            React Native 开发原生移动应用。
          </Typography.Text>
        }
      >
        <View>
          <Cell title='标题弹窗' isLink />
        </View>
      </Popup.Alert>
    </View>
  );
};

export default Index;

import { View } from '@tarojs/components';
import { useState, useRef } from 'react';
import Dialog from '../../components/dialog';
import Button from '../../components/button';
import Typography from '../../components/typography';
import './index.less';

const Index = () => {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [visible4, setVisible4] = useState(false);
  const [visible5, setVisible5] = useState(false);
  const dialogRef = useRef<any>(null);
  return (
    <>
      <View className='p-20'>
        <View>
          <Button type='primary' onClick={() => setVisible1(true)}>
            弹窗提示
          </Button>
          <Dialog
            visible={visible1}
            title='标题'
            showCancelButton
            message='逆水行舟，不进则退'
            onCancel={() => setVisible1(false)}
            onConfirm={() => setVisible1(false)}
          />
        </View>
      </View>

      <View className='p-20'>
        <View>
          <Button type='primary' onClick={() => setVisible5(true)}>
            异步弹窗
          </Button>
          <Dialog
            visible={visible5}
            title='标题'
            showCancelButton
            message='逆水行舟，不进则退'
            onCancel={() =>
              new Promise((resolve) => {
                setTimeout(() => {
                  resolve(true);
                  setVisible5(false);
                }, 1200);
              })
            }
            onConfirm={() =>
              new Promise((resolve) => {
                setTimeout(() => {
                  resolve(true);
                  setVisible5(false);
                }, 2000);
              })
            }
          />
        </View>
      </View>

      <View className='p-20'>
        <View>
          <Button type='primary' onClick={() => setVisible2(true)}>
            弹窗提示(确定)
          </Button>
          <Dialog
            visible={visible2}
            title='标题'
            onConfirm={() => setVisible2(false)}
          >
            <Typography.Text>逆水行舟，不进则退。</Typography.Text>
          </Dialog>
        </View>
      </View>

      <View className='p-20'>
        <View>
          <Button type='primary' onClick={() => setVisible3(true)}>
            圆角弹窗提示(点击遮罩关闭弹窗)
          </Button>
          <Dialog
            visible={visible3}
            title='标题'
            theme='rounded'
            showCancelButton
            closeOnMaskClick
            onCancel={() => setVisible3(false)}
            onConfirm={() => setVisible3(false)}
          >
            <Typography.Text>逆水行舟，不进则退。</Typography.Text>
          </Dialog>
        </View>
      </View>

      <View className='p-20'>
        <View>
          <Button type='primary' onClick={() => setVisible3(true)}>
            自定义内容
          </Button>
          <Dialog
            visible={visible4}
            title='标题'
            theme='rounded'
            content={
              <View style={{ margin: '14px' }}>
                <Typography.Text>逆水行舟，不进则退。</Typography.Text>
              </View>
            }
            showCancelButton
            closeOnMaskClick
            onCancel={() => setVisible4(false)}
            onConfirm={() => setVisible4(false)}
          />
        </View>
      </View>

      <View className='p-20'>
        <View>
          <Dialog.Alert
            title='标题'
            theme='rounded'
            content={
              <View style={{ margin: '14px' }}>
                <Typography.Text>逆水行舟，不进则退。</Typography.Text>
              </View>
            }
            showCancelButton
            closeOnMaskClick
            onCancel={() => console.log('onCancel')}
            onConfirm={() => console.log('onConfirm')}
          >
            <Button type='primary'>Dialog.Alert</Button>
          </Dialog.Alert>
        </View>
      </View>

      <View className='p-20'>
        <Button type='primary' onClick={() => dialogRef.current.show()}>
          DialogInstance
        </Button>
        <View>
          <Dialog.Alert
            title='标题'
            ref={dialogRef}
            theme='rounded'
            content={
              <View style={{ margin: '14px' }}>
                <Typography.Text>逆水行舟，不进则退。</Typography.Text>
              </View>
            }
            showCancelButton
            closeOnMaskClick
            onCancel={() => console.log('onCancel')}
            onConfirm={() => console.log('onConfirm')}
          />
        </View>
      </View>
    </>
  );
};

export default Index;

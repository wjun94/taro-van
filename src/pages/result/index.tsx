import { View } from '@tarojs/components';
import { Result, Button } from '../../index';
import './index.less';

const Index = () => {
  return (
    <View>
      <Result
        title='支付成功'
        subTitle='订单号: 2017182818828182881'
        extra={[
          <Button key='home' shape='rounded'>
            返回首页
          </Button>,
          <Button key='order' shape='rounded' type='primary'>
            我的订单
          </Button>,
        ]}
      />

      <Result
        className='my20'
        title='支付失败'
        subTitle='订单号: 2017182818828182881'
        status='error'
        extra={[
          <Button key='home' shape='rounded'>
            返回首页
          </Button>,
          <Button key='order' shape='rounded' type='primary'>
            我的订单
          </Button>,
        ]}
      />

      <Result
        title='支付警告'
        subTitle='订单号: 2017182818828182881'
        status='warning'
        extra={[
          <Button key='home' shape='rounded'>
            返回首页
          </Button>,
          <Button key='order' shape='rounded' type='primary'>
            我的订单
          </Button>,
        ]}
      />
    </View>
  );
};

export default Index;

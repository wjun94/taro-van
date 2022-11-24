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
    </View>
  );
};

export default Index;

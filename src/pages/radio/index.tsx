import { View } from '@tarojs/components';
import { useState } from 'react';
import Typography from '../../components/typography';
import Radio from '../../components/radio';

const Index = () => {
  const [checked, setChecked] = useState(false);
  return (
    <View className='p-20'>
      <View>
        <Typography.Text type='secondary' block className='my-title'>
          基本用法
        </Typography.Text>
        <Radio onChange={() => setChecked((v) => !v)} checked={checked}>
          测试1
        </Radio>
      </View>

      <View>
        <Typography.Text type='secondary' className='my-title'>
          默认值
        </Typography.Text>
        <Radio.Group defaultValue='2' direction='vertical'>
          <Radio value='1'>测试1</Radio>
          <Radio value='2'>测试2</Radio>
        </Radio.Group>
      </View>

      
    </View>
  );
};

export default Index;

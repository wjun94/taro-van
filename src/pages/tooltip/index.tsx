import { View } from '@tarojs/components';
import { useState } from 'react';
import Typography from '../../components/typography';
import Tooltip from '../../components/tooltip';
import Flex from '../../components/flex';

const Index = () => {
  const [visible, setVisible] = useState(false);
  return (
    <View className='p-20'>
      <Typography.Text type='secondary' block className='my-title'>
        基础用法
      </Typography.Text>
      <Flex>
        <Tooltip
          visible={visible}
          title={
            <Flex direction='column'>
              <Typography.Text onClick={() => setVisible(false)}>
                编辑
              </Typography.Text>
              <Typography.Text type='danger' onClick={() => setVisible(false)}>
                删除
              </Typography.Text>
            </Flex>
          }
          className='mr-20'
        >
          <Typography.Text onClick={() => setVisible(true)}>
            底部显示
          </Typography.Text>
        </Tooltip>

        <Tooltip placement='top' title='prompt text'>
          <Typography.Text>顶部显示</Typography.Text>
        </Tooltip>
      </Flex>
    </View>
  );
};

export default Index;

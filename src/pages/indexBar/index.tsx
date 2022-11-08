import { View } from '@tarojs/components';
import { Typography, IndexBar, Cell } from '../../index';
import './index.less';

const Index = () => {
  return (
    <View>
      <Typography.Text type='secondary' block className='my-title'>
        基本用法
      </Typography.Text>
      <IndexBar>
        {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].map((item) => (
          <IndexBar.Panel key={item} index={item} title={item}>
            <>
              <Cell title='标题' />
              <Cell title='标题' />
              <Cell title='标题' />
            </>
          </IndexBar.Panel>
        ))}
      </IndexBar>
    </View>
  );
};

export default Index;

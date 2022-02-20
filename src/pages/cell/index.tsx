import { View } from '@tarojs/components';
import Cell from '../../components/cell';
import './index.less';

const Index = () => {
  return (
    <View>
      <Cell title='标题' value='内容' />
      <Cell title='标题' isLink value='内容' />
      <Cell title='标题' isLink />
      <Cell title='测试' intro='描述信息' value='内容' />
    </View>
  );
};

export default Index;

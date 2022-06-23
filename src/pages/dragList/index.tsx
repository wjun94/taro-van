import { View } from '@tarojs/components';
import Typography from '../../components/typography';
import DragList from '../../components/dragList';
import './index.less';

const Index = () => {
  return (
    <DragList
      height={80}
      data={[1, 2, 3]}
      onChange={(data, startIdx, endIdx) => console.log(data, startIdx, endIdx)}
      onDragEnd={(data) => console.log(data)}
      renderItem={(item) => (
        <View style={{ backgroundColor: '#fff', width: '750px' }}>
          <Typography.Text>{item}</Typography.Text>
        </View>
      )}
    />
  );
};

export default Index;

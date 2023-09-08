import { View } from '@tarojs/components';
import Search from '../../components/search';
import Typography from '../../components/typography';
import './index.less';

const Index = () => {
  return (
    <View className='pt-20'>
      <Typography.Title className='pl-20 pt-20' level={3}>
        基础用法
      </Typography.Title>
      <Search clearable={false} background='#4fc08d' />
      
      <Typography.Title className='pl-20 pt-20' level={3}>
        事件监听
      </Typography.Title>
      <Search
        rounded
        onSearch={(value) => console.log(value)}
        onChange={(value) => console.log(value)}
      >
        <Typography.Text className='w-120px' type='primary'>
          搜索
        </Typography.Text>
      </Search>
    </View>
  );
};

export default Index;

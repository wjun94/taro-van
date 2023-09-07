import Search from '../../components/search';
import Typography from '../../components/typography';
import './index.less';

const Index = () => {
  return (
    <>
      <Search background='#4fc08d' />
      <Search rounded>
        <Typography.Text className='w-120px' type='primary'>
          搜索
        </Typography.Text>
      </Search>
    </>
  );
};

export default Index;

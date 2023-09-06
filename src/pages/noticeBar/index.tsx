import NoticeBar from '../../components/noticeBar';
import './index.less';

const Index = () => {
  return (
    <>
      {/* <NoticeBar text='无语' /> */}
      <NoticeBar
        className='top-140px'
        leftIcon
        text='明月直入，无心可猜。明月直入，无心可猜。明月直入，无心可猜。明月直入，无心可猜。明月直入，无心可猜。明月直入，无心可猜。明月直入，无心可猜。明月直入，无心可猜。明月直入，无心可猜。'
        mode='link'
      />
    </>
  );
};

export default Index;

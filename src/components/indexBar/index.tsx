import { View } from '@tarojs/components';
import { pageScrollTo } from '@tarojs/taro';
import Typography from '../typography';
import Panel from './panel';
import Flex from '../flex';

export type IndexBarProps = {
  children?: JSX.Element[] | JSX.Element;
  /** 是否隐藏索引 */
  hideIndex?: boolean;
  /** 当锚点变化时回调 */
  onIndexChange?: (idx: string | number, index: number) => void;
};

const IndexBar = ({ children, onIndexChange, hideIndex }: IndexBarProps) => {
  const onIndex = (idx: number, i) => {
    onIndexChange && onIndexChange(idx, i);
    //用目标的top值减去导航高度
    pageScrollTo({
      selector: `#panel-${idx}`,
      duration: 300,
    });
  };
  return (
    <View className='tv-index-bar'>
      {children}

      {Object.prototype.toString.call(children) === '[object Array]' &&
      !hideIndex ? (
        <Flex
          onClick={(e) => e.stopPropagation()}
          className='tv-index-bar-sidebar'
          direction='column'
        >
          {(children as JSX.Element[])?.map((item, i) => (
            <Typography.Text
              className='tv-index-bar-sidebar_txt'
              onClick={(e) => {
                onIndex(item.props.index, i);
                e.stopPropagation();
              }}
              size='xs'
              key={item.props.index}
            >
              {item.props.title}
            </Typography.Text>
          ))}
        </Flex>
      ) : (
        ''
      )}
    </View>
  );
};

IndexBar.Panel = Panel;

export default IndexBar;

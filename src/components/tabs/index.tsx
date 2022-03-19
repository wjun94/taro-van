import {
  ReactNode,
  cloneElement,
  Children,
  createContext,
  useState,
  ReactElement,
  useEffect,
} from 'react';
import { ViewProps } from '@tarojs/components/types/View';
import classNames from 'classnames';
import { View } from '@tarojs/components';
import { createSelectorQuery } from '@tarojs/taro';
import Tab from './tab';
import Flex from '../flex';

export type P = {
  children?: ReactNode;
  className?: string;
  description?: ReactNode;
  image?: ReactNode;
  activeKey?: string;
  onChange?: (value: string) => void;
};

export const tabsContext = createContext('');

const TvTabs = ({
  children,
  className,
  description,
  image,
  activeKey,
  onChange,
  ...props
}: P & Omit<ViewProps, 'className'>) => {
  const prefixCls = 'tv-tabs';
  const classes = classNames(prefixCls, className);
  const [value, setValue] = useState(
    activeKey || (children && children[0] ? children[0].props.value : ''),
  );
  const [rect, setRect] = useState({
    left: 0,
    width: 40,
  });
  // 获取宽高
  const getQuery = () => {
    // 获取移动距离
    const query = createSelectorQuery()
      .select('.tv-tab__actived')
      .boundingClientRect();

    query.exec((res) => {
      setRect((v) => ({ ...v, left: res[0].left }));
    });
    // 获取宽
    const titleWidth = createSelectorQuery()
      .select('.tv-tab__actived .tv-tab__title')
      .boundingClientRect();
    titleWidth.exec((res) => {
      setRect((v) => ({ ...v, width: res[0].width }));
    });
  };
  useEffect(() => {
    getQuery();
  }, []);
  return (
    <tabsContext.Provider value={value as any}>
      <Flex justify='between' className={classes} {...props}>
        {Children.map(children, (child: ReactElement) => {
          return cloneElement(child, {
            onTitle: (e) => {
              if (!child.props.disabled) {
                setValue(e);
                getQuery();
                onChange && onChange(e);
              }
            },
          });
        })}
        <View
          style={{ left: rect.left + 'px', width: rect.width + 'px' }}
          className='tv-tabs__line'
        />
      </Flex>
    </tabsContext.Provider>
  );
};

TvTabs.Tab = Tab;

export default TvTabs;

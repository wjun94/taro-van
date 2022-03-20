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
import { View, ScrollView } from '@tarojs/components';
import { createSelectorQuery } from '@tarojs/taro';
import Tab from './tab';
import Flex from '../flex';

export type P = {
  children?: ReactNode;
  className?: string;
  description?: ReactNode;
  image?: ReactNode;
  defaultActiveKey?: string;
  name?: string;
  onChange?: (value: string) => void;
};

export const tabsContext = createContext('');

const TvTabs = ({
  name,
  children,
  className,
  description,
  image,
  defaultActiveKey,
  onChange,
  ...props
}: P & Omit<ViewProps, 'className'>) => {
  const prefixCls = 'tv-tabs';
  const classes = classNames(
    prefixCls,
    {
      [`tv-tabs-${name}`]: true,
    },
    className,
  );
  const [scroll, setScroll] = useState(0);
  const [value, setValue] = useState(
    defaultActiveKey ||
      (children && children[0] ? children[0].props.value : ''),
  );
  const [rect, setRect] = useState({
    all: [], // 所有dom位置
    left: 0,
    width: 40,
  });
  // 获取移动距离和dom宽度
  const getQuery = (idx = 0) => {
    setTimeout(() => {
      // 获取宽
      const titleWidth = createSelectorQuery()
        .select(`.${prefixCls}-${name} .tv-tab__actived .tv-tab__title`)
        .boundingClientRect();
      titleWidth.exec((res) => {
        setRect((v) => {
          let left = 14;
          for (let i = 0; i < idx; i++) {
            left += (v.all[i] as any).width;
          }
          setTimeout(() => {
            if (res[0].left > 160) {
              setScroll(50 * Math.ceil(left / 160));
            } else if (res[0].left < 100) {
              setScroll(-30 * Math.ceil(left / 160));
            }
          }, 30);
          return { ...v, width: res[0].width, left: left };
        });
      });
    }, 120);
  };
  useEffect(() => {
    setTimeout(() => {
      // 获取并保存所有节点位置信息
      const query = createSelectorQuery()
        .selectAll(`.${prefixCls}-${name} .tv-tab__head`)
        .boundingClientRect();
      query.exec((res) => {
        setRect((v) => ({ ...v, all: res[0] }));
      });
    }, 100);
    const idx = children
      ? (children as any).findIndex((item) => item.props.value === value)
      : 0;
    getQuery(idx);
  }, []);
  const ChildRender = () => {
    const child =
      children &&
      Object.prototype.toString.call(children) === '[object Array]' &&
      (children as any).find((item) => item.props.value === value);
    return child.props.children ? <>{child.props.children}</> : <></>;
  };
  return (
    <tabsContext.Provider value={value as any}>
      <ScrollView
        scrollWithAnimation
        showScrollbar={false}
        scrollX
        scrollLeft={scroll}
        className={classes}
        {...props}
      >
        <Flex wrap='nowrap' className={`${prefixCls}__container`}>
          {Children.map(children, (child: ReactElement, idx: number) => {
            return cloneElement(child, {
              onTitle: (e) => {
                if (!child.props.disabled) {
                  setValue(e);
                  getQuery(idx);
                  onChange && onChange(e);
                }
              },
            });
          })}
          <View
            style={{
              transform: `translate3d(${rect.left}px, 0px, 0px)`,
              width: rect.width + 'px',
            }}
            className='tv-tabs__line'
          />
        </Flex>
      </ScrollView>
      <ChildRender />
    </tabsContext.Provider>
  );
};

TvTabs.Tab = Tab;

export default TvTabs;

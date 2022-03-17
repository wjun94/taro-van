import {
  ReactNode,
  cloneElement,
  Children,
  createContext,
  useState,
  useEffect,
} from 'react';
import { ViewProps } from '@tarojs/components/types/View';
import classNames from 'classnames';
import Tab from './tab';
import Flex from '../flex';

export type P = {
  children?: ReactNode | any;
  className?: string;
  description?: ReactNode;
  image?: ReactNode;
};

export const tabsContext = createContext({
  index: 0,
  value: '',
});

const TvTabs = ({
  children,
  className,
  description,
  image,
  ...props
}: P & Omit<ViewProps, 'className'>) => {
  const prefixCls = 'tv-tabs';
  const classes = classNames(prefixCls, className);
  const [value, setValue] = useState({
    index: 0,
    value: '',
  });
  return (
    <tabsContext.Provider value={value as any}>
      <Flex className={classes} {...props}>
        {Children.map(children, (child, index) => {
          return cloneElement(child, {
            index,
            onTitle: (e, idx) => {
              setValue({
                value: e,
                index: idx,
              });
            },
          });
        })}
      </Flex>
    </tabsContext.Provider>
  );
};

TvTabs.Tab = Tab;

export default TvTabs;

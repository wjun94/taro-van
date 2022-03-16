import { ReactNode } from 'react';
import { ViewProps } from '@tarojs/components/types/View';
import classNames from 'classnames';
import Tab from './tab';
import Typography from '../typography';
import Icon from '../icon';
import Flex from '../flex';

export type P = {
  children?: ReactNode;
  className?: string;
  description?: ReactNode;
  image?: ReactNode;
};

const TvTabs = ({
  children,
  className,
  description,
  image,
  ...props
}: P & Omit<ViewProps, 'className'>) => {
  const prefixCls = 'tv-empty';
  const classes = classNames(prefixCls, className);
  return (
    <Flex direction='col' className={classes} {...props}>
      {children}
    </Flex>
  );
};

TvTabs.Tab = Tab;

export default TvTabs;

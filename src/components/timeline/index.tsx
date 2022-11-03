import { ReactElement } from 'react';
import { View } from '@tarojs/components';
import clsx from 'classnames';
import Item from './item';

export type TimelineProps = {
  children?: ReactElement | ReactElement[];
  className?: string;
};

const Timeline = ({ children, className }: TimelineProps) => {
  const classes = clsx('tv-timeline', className);
  return <View className={classes}>{children}</View>;
};

Timeline.Item = Item;

export default Timeline;

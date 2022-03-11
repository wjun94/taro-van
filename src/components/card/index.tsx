import { View } from '@tarojs/components';
import { ReactNode } from 'react';
import { ViewProps } from '@tarojs/components/types/View';
import classNames from 'classnames';
import Typography from '../typography';

export type P = {
  title?: ReactNode;
  className?: string;
};

const TvCard = ({
  className,
  title,
  ...props
}: P & Omit<ViewProps, 'className'>) => {
  const prefixCls = 'tv-card';
  const classes = classNames(prefixCls, {}, className);
  return (
    <View className={classes} {...props}>
      <Typography.Title level={3}>{title}</Typography.Title>
    </View>
  );
};

export default TvCard;

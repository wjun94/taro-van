import { Radio, View } from '@tarojs/components';
import { RadioProps } from '@tarojs/components/types/Radio';
import { ReactNode } from 'react';
import classNames from 'classnames';
import RadioGroup from './group';

export type P = {
  children?: ReactNode;
  size?: 'xs' | 'sm' | 'lg' | 'xl';
};

const TvRadio = ({ children, className, size, ...props }: P & RadioProps) => {
  const prefixCls = 'tv-radio';
  const classes = classNames(
    prefixCls,
    {
      [`${prefixCls}--${size}`]: size,
    },
    className,
  );
  return (
    <View className={classes}>
      <Radio {...props}>{children}</Radio>
    </View>
  );
};

TvRadio.Group = RadioGroup;

export default TvRadio;

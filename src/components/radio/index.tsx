import { Radio, View } from '@tarojs/components';
import { RadioProps } from '@tarojs/components/types/Radio';
import { ReactNode } from 'react';
import classNames from 'classnames';
import RadioGroup from './group';

export type P = {
  children?: ReactNode;
  label?: string;
  size?: 'sm' | 'lg';
};

const TvRadio = ({ children, className, size, ...props }: P & RadioProps) => {
  const prefixCls = 'tv-radio';
  const classes = classNames(
    prefixCls,
    {
      [`${prefixCls}-app`]: process.env.TARO_ENV !== 'h5',
      [`${prefixCls}-app--${size}`]: process.env.TARO_ENV !== 'h5' && size,
      [`${prefixCls}-web`]: process.env.TARO_ENV === 'h5',
      [`${prefixCls}-web--${size}`]: process.env.TARO_ENV === 'h5' && size,
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

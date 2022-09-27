import { Radio as TaroRadio, View } from '@tarojs/components';
import { RadioProps as TaroRadioProps } from '@tarojs/components/types/Radio';
import { ReactNode } from 'react';
import clsx from 'clsx';
import RadioGroup from './group';

export type RadioProps = {
  children?: ReactNode;
  size?: 'sm' | 'lg';
};

const Radio = ({
  children,
  className,
  size,
  ...props
}: RadioProps & TaroRadioProps) => {
  const prefixCls = 'tv-radio';
  const classes = clsx(
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
      <TaroRadio {...props}>{children}</TaroRadio>
    </View>
  );
};

Radio.Group = RadioGroup;

export default Radio;

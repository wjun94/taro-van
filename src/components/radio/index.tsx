import { Radio, View } from '@tarojs/components';
import { RadioProps } from '@tarojs/components/types/Radio';
import { ReactNode } from 'react';
import { ENV_TYPE } from '@tarojs/taro';
import classNames from 'classnames';
import RadioGroup from './group';

export type P = {
  children?: ReactNode;
  size?: 'sm' | 'lg';
};

const TvRadio = ({ children, className, size, ...props }: P & RadioProps) => {
  const prefixCls = 'tv-radio';
  const classes = classNames(
    prefixCls,
    {
      [`${prefixCls}--${size}`]: size,
      [`${prefixCls}-web--${size}`]: ENV_TYPE.WEB && size,
    },
    className,
  );
  return (
    <View className={classes}>
      <Radio color='#FF7464' {...props}>
        {children}
      </Radio>
    </View>
  );
};

TvRadio.Group = RadioGroup;

export default TvRadio;

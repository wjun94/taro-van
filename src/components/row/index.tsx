import { ReactNode } from 'react';
import { View } from '@tarojs/components';
import { ViewProps } from '@tarojs/components/types/View';
import classNames from 'classnames';

export type P = {
  children?: ReactNode;
};

const Row = ({ children, className, ...props }: P & ViewProps) => {
  const prefixCls = 'tv-grid';
  const classes = classNames(
    prefixCls,
    {
      /*  [`${prefixCls}-${direction}`]: direction,
       [`${prefixCls}-${wrap}`]: wrap,
       [`${prefixCls}-justify-${justify}`]: justify,
       [`${prefixCls}-align-${align}`]: align, */
    },
    className,
  );
  return (
    <View className={classes} {...props}>
      <View className='col'></View>
      <View className='col'></View>
      <View className='col'></View>
      <View className='col'></View>
    </View>
  );
};

export default Row;

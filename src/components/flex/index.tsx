import { ReactNode } from 'react';
import { View } from '@tarojs/components';
import { ViewProps } from '@tarojs/components/types/View';
import clsx from 'clsx';

export type FlexProps = {
  children?: ReactNode;
  // 对齐内容
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  // 对齐项目
  align?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
  // Flex Direction
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  wrap?: 'wrap' | 'wrap-reverse' | 'nowrap';
};

const Flex = ({
  align = 'start',
  justify = 'start',
  direction = 'row',
  wrap = 'wrap',
  children,
  className,
  ...props
}: FlexProps & ViewProps) => {
  const prefixCls = 'tv-flex';
  const classes = clsx(
    prefixCls,
    {
      [`${prefixCls}-${direction}`]: direction,
      [`${prefixCls}-${wrap}`]: wrap,
      [`${prefixCls}-justify-${justify}`]: justify,
      [`${prefixCls}-align-${align}`]: align,
    },
    className,
  );
  return (
    <View className={classes} {...props}>
      {children}
    </View>
  );
};

export default Flex;

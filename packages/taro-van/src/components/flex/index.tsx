import { ReactNode } from 'react';
import { View } from '@tarojs/components';
import { ViewProps } from '@tarojs/components/types/View';
import classNames from 'classnames';

export type P = {
  children?: ReactNode;
  // 对齐内容
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  // 对齐项目
  align?: 'start' | 'end' | 'center' | 'around' | 'evenly';
  // Flex Direction
  direction?: 'row' | 'col';
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
}: P & ViewProps) => {
  const prefixCls = 'tv-flex';
  const classes = classNames(
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

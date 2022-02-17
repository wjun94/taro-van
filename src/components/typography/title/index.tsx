import { Text } from '@tarojs/components';
import type { TextProps } from '@tarojs/components/types/Text';
import { ReactNode } from 'react';
import classNames from 'classnames';

export type P = {
  children?: ReactNode;
  level?: 1 | 2 | 3 | 4;
  align?: 'right' | 'center';
} & Omit<TextProps, 'children'>;

const TextComp = ({ children, className, level = 1, align, ...props }: P) => {
  const prefixCls = 'tv-title';
  const classes = classNames(
    prefixCls,
    {
      [`${prefixCls}-${level}`]: level,
      [`${prefixCls}-${align}`]: align,
    },
    className,
  );
  return (
    <Text className={classes} {...props}>
      {children}
    </Text>
  );
};

export default TextComp;

import { Text } from '@tarojs/components';
import type { TextProps } from '@tarojs/components/types/Text';
import { ReactNode } from 'react';
import classNames from 'classnames';

export type P = {
  children?: ReactNode;
  className?: string;
  level?: 1 | 2 | 3 | 4;
} & Omit<TextProps, 'className' | 'children'>;

const TextComp = ({ children, className, level = 1, ...props }: P) => {
  const prefixCls = 'tv-title';
  const classes = classNames(
    prefixCls,
    {
      [`${prefixCls}-${level}`]: level,
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

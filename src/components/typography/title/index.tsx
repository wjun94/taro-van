import { Text } from '@tarojs/components';
import type { TextProps } from '@tarojs/components/types/Text';
import { ReactNode } from 'react';
import clsx from 'clsx';

export type TitleProps = {
  children?: ReactNode;
  level?: 1 | 2 | 3 | 4;
  align?: 'right' | 'center';
} & Omit<TextProps, 'children'>;

const TextComp = ({
  children,
  className,
  level = 1,
  align,
  ...props
}: TitleProps) => {
  const prefixCls = 'tv-title';
  const classes = clsx(
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

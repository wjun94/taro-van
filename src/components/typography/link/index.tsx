import { Text } from '@tarojs/components';
import type { TextProps as TaroTextProps } from '@tarojs/components/types/Text';
import { ReactNode } from 'react';
import clsx from 'clsx';
import { navigateTo } from '@tarojs/taro';

export type LinkProps = {
  children?: ReactNode;
  href?: string;
} & Omit<TaroTextProps, 'children'>;

const TextComp = ({
  children,
  className,
  href,
  onClick,
  ...props
}: LinkProps) => {
  const prefixCls = 'tv-link';
  const classes = clsx(prefixCls, className);
  return (
    <Text
      className={classes}
      onClick={(event) => {
        if (href) {
          navigateTo({ url: href });
        }
        if (onClick) {
          onClick(event);
        }
      }}
      {...props}
    >
      {children}
    </Text>
  );
};

export default TextComp;

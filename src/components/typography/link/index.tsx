import { Text } from '@tarojs/components';
import type { TextProps } from '@tarojs/components/types/Text';
import { ReactNode } from 'react';
import classNames from 'classnames';
import { navigateTo } from '@tarojs/taro';

export type P = {
  children?: ReactNode;
  className?: string;
  href?: string;
} & Omit<TextProps, 'className' | 'children'>;

const TextComp = ({ children, className, href, onClick, ...props }: P) => {
  const prefixCls = 'tv-link';
  const classes = classNames(prefixCls, className);
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

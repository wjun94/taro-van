import { Text } from '@tarojs/components';
import type { TextProps as TaroTextProps } from '@tarojs/components/types/Text';
import { setClipboardData, showToast } from '@tarojs/taro';
import { ReactNode } from 'react';
import clsx from 'classnames';

export type TextProps = {
  children?: ReactNode;
  // primary: 主题色 default:默认色 text:灰色 danger:红色 white:白色 copy:复制
  type?:
    | 'primary'
    | 'default'
    | 'secondary'
    | 'danger'
    | 'warning'
    | 'success'
    | 'white';
  align?: 'left' | 'center' | 'right';
  // xs: 20px sm: 24px default: 28px lg: 32px xl 36px
  size?: 'xs' | 'sm' | 'lg' | 'xl';
  weight?: 'normal' | 'medium' | 'bold' | 'extrabold';
  copyable?: { text: string; info?: string }; // 拷贝
  ellipsis?: boolean;
  block?: boolean;
} & Omit<TaroTextProps, 'children'>;

const TextComp = ({
  children,
  type = 'default',
  weight = 'normal',
  size,
  block,
  align,
  ellipsis,
  copyable,
  className,
  onClick,
  ...props
}: TextProps) => {
  const prefixCls = 'tv-text';
  const classes = clsx(
    prefixCls,
    {
      [`${prefixCls}-${ellipsis}`]: ellipsis,
      [`${prefixCls}-${weight}`]: weight,
      [`${prefixCls}-${align}`]: align,
      [`${prefixCls}--${type}`]: type,
      [`${prefixCls}--${size}`]: size,
      [`${prefixCls}--copy`]: copyable,
      [`${prefixCls}--ellipsis`]: ellipsis,
      [`${prefixCls}--block`]: block,
    },
    className,
  );
  return (
    <Text
      className={classes}
      onClick={(event) => {
        if (copyable && copyable.text) {
          setClipboardData({ data: copyable.text });
          showToast({
            title: copyable.info || '复制成功',
            icon: 'success',
          });
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

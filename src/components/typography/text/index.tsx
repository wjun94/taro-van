import { Text } from '@tarojs/components';
import type { TextProps } from '@tarojs/components/types/Text';
import { setClipboardData, showToast } from '@tarojs/taro';
import { ReactNode } from 'react';
import classNames from 'classnames';

export type P = {
  children?: ReactNode;
  // primary: 主题色 default:默认色 text:灰色 link:蓝色 danger:红色 white:白色 copy:复制
  type?:
    | 'primary'
    | 'default'
    | 'secondary'
    | 'link'
    | 'danger'
    | 'warning'
    | 'success'
    | 'white';
  ellipsis?: boolean;
  copyable?: { text: string; info?: string }; // 拷贝
  align?: 'left' | 'center' | 'right';
  weight?: 'normal' | 'medium' | 'bold' | 'extrabold';
  truncate?: boolean; // 省略号
} & Omit<TextProps, 'children'>;

const TextComp = ({
  children,
  type = 'default',
  weight = 'normal',
  align = 'left',
  truncate,
  copyable,
  className,
  onClick,
  ...props
}: P) => {
  const prefixCls = 'tv-text';
  const classes = classNames(
    prefixCls,
    {
      [`${prefixCls}-${truncate}`]: truncate,
      [`${prefixCls}-${weight}`]: weight,
      [`${prefixCls}-${align}`]: align,
      [`${prefixCls}--${type}`]: type,
      [`${prefixCls}--copy`]: copyable,
      [`${prefixCls}--truncate`]: truncate,
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

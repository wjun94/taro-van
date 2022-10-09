import { Button as TaroButton, View } from '@tarojs/components';
import { ButtonProps as TaroButtonProps } from '@tarojs/components/types/Button';
import { ReactNode } from 'react';
import clsx from 'classnames';

export type ButtonProps = {
  children: ReactNode;
  // primary:主题 danger:红色 info:信息按钮 default:默认 warning:警告
  type?: 'primary' | 'danger' | 'info' | 'default' | 'warning';
  // large:满格 normal:普通按钮 small:小型按钮 mini:迷你
  size?: 'large' | 'normal' | 'small' | 'mini';
  plain?: boolean; // 按钮是否镂空，背景色透明
  shape?: 'rounded' | 'rectangular';

  block?: boolean; // 是否为块级元素
  noStyle?: boolean;
} & Omit<TaroButtonProps, 'type' | 'size'>;

const Button = ({
  children,
  size = 'normal',
  block,
  shape,
  plain,
  type = 'default',
  loading,
  className,
  noStyle,
  onClick,
  ...props
}: ButtonProps) => {
  const prefixCls = 'tv-button';
  const classes = clsx(
    prefixCls,
    {
      [`${prefixCls}-${size}`]: size,
      [`${prefixCls}--${type}`]: type,
      [`${prefixCls}--${type}__round`]: type && shape && shape === 'rounded',
      [`${prefixCls}--${type}__rectangular`]:
        type && shape && shape === 'rectangular',
      [`${prefixCls}--${type}__plain`]: type && plain,
      [`${prefixCls}-round`]: shape && shape === 'rounded',
      [`${prefixCls}-rectangular`]: shape && shape === 'rectangular',
      [`${prefixCls}-nostyle`]: noStyle,
    },
    className,
  );
  return (
    <TaroButton
      loading={loading}
      className={classes}
      plain={plain}
      size={block ? 'default' : 'mini'}
      disabled={loading || props.disabled}
      {...props}
      onClick={(e) => {
        if (loading || props.disabled) return;
        onClick && onClick(e);
      }}
    >
      {children}
    </TaroButton>
  );
};

export default Button;

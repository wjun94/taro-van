import { Button, View } from '@tarojs/components';
import { ButtonProps } from '@tarojs/components/types/Button';
import { ReactNode } from 'react';
import classNames from 'classnames';

export type P = {
  children: ReactNode;
  // primary:主题 danger:红色 info:信息按钮 default:默认 warning:警告
  type?: 'primary' | 'danger' | 'info' | 'default' | 'warning' | 'white';
  // large:满格 normal:普通按钮 small:小型按钮 mini:迷你
  size?: 'large' | 'normal' | 'small' | 'mini';
  plain?: boolean; // 按钮是否镂空，背景色透明
  round?: boolean; // 圆角
  block?: boolean; // 是否为块级元素
  noStyle?: boolean;
} & Omit<ButtonProps, 'type' | 'size'>;

const TvButton = ({
  children,
  size = 'normal',
  block,
  round,
  plain,
  type = 'default',
  loading,
  className,
  noStyle,
  onClick,
  ...props
}: P) => {
  const prefixCls = 'tv-button';
  const viewClasses = classNames(
    {
      [`${prefixCls}-view`]: true,
      [`${prefixCls}-block`]: block,
    },
    className,
  );
  const classes = classNames(prefixCls, {
    [`${prefixCls}-${size}`]: size,
    [`${prefixCls}--${type}`]: type,
    [`${prefixCls}--${type}__round`]: type && round,
    [`${prefixCls}--${type}__plain`]: type && plain,
    [`${prefixCls}-round`]: round,
    [`${prefixCls}-nostyle`]: noStyle,
  });
  return (
    <View className={viewClasses}>
      <Button
        loading={loading}
        className={classes}
        plain={plain}
        size={['large', 'normal'].includes(size) || block ? 'default' : 'mini'}
        disabled={loading || props.disabled}
        {...props}
        onClick={(e) => {
          if (loading || props.disabled) return;
          onClick && onClick(e);
        }}
      >
        {children}
      </Button>
    </View>
  );
};

export default TvButton;

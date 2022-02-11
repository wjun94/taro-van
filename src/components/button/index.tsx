import { ButtonProps, Button } from '@tarojs/components';
import { ReactElement } from 'react';
import classNames from 'classnames';
// import './index.less';

export type P = {
  children: string | ReactElement | ReactElement[];
  // primary:主题 danger:红色 info:信息按钮 default:默认 warning:警告
  type?: 'primary' | 'danger' | 'info' | 'default' | 'warning';
  // large:满格 normal:普通按钮 small:小型按钮 mini:迷你
  size?: 'large' | 'normal' | 'small' | 'mini';
  plain?: boolean; // 按钮是否镂空，背景色透明
  round?: boolean; // 圆角
  block?: boolean; // 是否为块级元素
  className?: string;
  noStyle?: boolean;
} & Omit<ButtonProps, 'type' | 'size' | 'className'>;

const AtButton = ({
  children,
  size = 'small',
  block,
  round,
  plain,
  type = 'default',
  className,
  noStyle,
  ...props
}: P) => {
  const prefixCls = 'tv-button';
  const classes = classNames(
    prefixCls,
    {
      [`${prefixCls}-${size}`]: size,
      [`${prefixCls}-${block}`]: block,
      [`${prefixCls}-${round}`]: round,
      [`${prefixCls}--${type}`]: type,
      [`${prefixCls}--${type}__${round}`]: type && round,
      [`${prefixCls}--${type}__${plain}`]: type && plain,
      [`${prefixCls}-nostyle`]: noStyle,
    },
    className,
  );
  return (
    <Button
      loading={props.disabled}
      className={classes}
      plain={plain}
      size={['large', 'normal'].includes(size) ? 'default' : 'mini'}
      {...props}
      onClick={(e) => {
        if (props.loading) return;
        props.onClick && props.onClick(e);
      }}
    >
      {children}
    </Button>
  );
};

export default AtButton;

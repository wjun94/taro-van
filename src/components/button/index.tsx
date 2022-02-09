import { ButtonProps, Button } from '@tarojs/components';
import { ReactElement } from 'react';
import './index.less';

export type P = {
  children: string | ReactElement | ReactElement[];
  // primary:主题 danger:红色 info:消息按钮 default:默认 warning:警告 white:白色
  type?: 'primary' | 'danger' | 'info' | 'default' | 'warning' | 'white';
  // default:满格 mini:缩小 base:正常大小
  size?: 'default' | 'mini' | 'lg';
  plain?: boolean; // 按钮是否镂空，背景色透明
  round?: boolean; // 圆角
  block?: boolean; // 是否为块级元素
  className?: string;
  noStyle?: boolean;
} & Omit<ButtonProps, 'type' | 'size' | 'className'>;

const AtButton = ({
  children,
  size = 'lg',
  block,
  round,
  plain,
  type = 'default',
  className,
  noStyle,
  ...props
}: P) => {
  return (
    <Button
      loading={props.disabled}
      className={`my-button button-${size} button-${block && 'block'} button-${
        round && 'round'
      } button--${type} button--${type}__${round && 'round'} button--${type}__${
        plain && 'plain'
      } ${noStyle && 'button-nostyle'} ${className}`}
      plain={plain}
      size={size === 'default' ? 'default' : 'mini'}
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

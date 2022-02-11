import { Text } from '@tarojs/components';
import type { TextProps } from '@tarojs/components/types/Text';
import { setClipboardData } from '@tarojs/taro';
import { ReactElement } from 'react';
import './index.less';

export type P = {
  children?: string | string[] | number | ReactElement | any;
  // primary: 主题色 default:默认色 text:灰色 link:蓝色 danger:红色 white:白色 copy:复制
  type?:
    | 'primary'
    | 'default'
    | 'text'
    | 'link'
    | 'danger'
    | 'white'
    | 'copy'
    | 'title';
  size?: 'xs' | 'sm' | 'default' | 'lg' | 'xl' | '2xl';
  align?: 'left' | 'center' | 'right';
  weight?: 'normal' | 'medium' | 'bold' | 'extrabold';
  copyData?: string;
  className?: string;
  truncate?: boolean; // 省略号
} & TextProps;

const TextComp = ({
  children,
  type = 'default',
  size = 'default',
  weight = 'normal',
  align = 'left',
  truncate,
  copyData = '',
  className,
  ...props
}: P) => {
  return (
    <Text
      className={`${
        truncate && 'truncate'
      } text--${type} text-${size} text-${weight} text-${align} ${className}`}
      onClick={(event) => {
        if (type === 'copy' && copyData) {
          setClipboardData({ data: copyData });
        }
        if (props.onClick) {
          props.onClick(event);
        }
      }}
      {...props}
    >
      {children}
    </Text>
  );
};

export default TextComp;

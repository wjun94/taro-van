import { Text } from '@tarojs/components';
import { TextProps } from '@tarojs/components/types/Text';
import clsx from 'classnames';

export type IconProps = {
  icon: string;
  className?: string;
  size?: 'sm' | 'base' | 'lg' | 'xl' | 'xxl';
};

const Icon = ({
  icon,
  className,
  size = 'base',
  ...props
}: IconProps & Omit<TextProps, 'className'>) => {
  const prefixCls = 'tv-icon';
  const classes = clsx(
    prefixCls,
    'iconfont',
    {
      [`${icon}`]: icon,
      [`${prefixCls}-${size}`]: size,
    },
    className,
  );
  return <Text className={classes} {...props} />;
};

export default Icon;

import { Text, View } from '@tarojs/components';
import { TextProps } from '@tarojs/components/types/Text';
import clsx from 'clsx';

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
    'iconfont',
    {
      [`${icon}`]: icon,
      [`${prefixCls}-${size}`]: size,
    },
    className,
  );
  return (
    <View className={prefixCls}>
      <Text className={classes} {...props} />
    </View>
  );
};

export default Icon;

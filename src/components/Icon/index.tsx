import { Text, View } from '@tarojs/components';
import { TextProps } from '@tarojs/components/types/Text';
import classNames from 'classnames';

export type P = {
  icon: string;
  className?: string;
  size?: 'sm' | 'base' | 'lg' | 'xl' | 'xxl';
};

const Icon = ({
  icon,
  className,
  size = 'base',
  style,
  ...props
}: P & Omit<TextProps, 'className'>) => {
  const prefixCls = 'tv-icon';
  const loadingClasses = classNames('tv-icon-loading', {
    [`tv-icon-loading__${size}`]: icon === 'icon-loading' && size,
  });
  const classes = classNames(
    'iconfont',
    prefixCls,
    {
      [`${icon}`]: icon,
      [`${prefixCls}-${size}`]: size,
      [`icon-loading__${size}`]: icon === 'icon-loading' && size,
    },
    className,
  );
  return (
    <>
      {icon === 'icon-loading' ? (
        <View className={loadingClasses}>
          <View className={classes} {...props} />
        </View>
      ) : (
        <Text className={classes} {...props} />
      )}
    </>
  );
};

export default Icon;

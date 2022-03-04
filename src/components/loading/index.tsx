import { View } from '@tarojs/components';
import { TextProps } from '@tarojs/components/types/Text';
import classNames from 'classnames';

export type P = {
  size?: 'sm' | 'base' | 'lg' | 'xl' | 'xxl';
  className?: string;
};

const Loading = ({
  className,
  size = 'base',
  ...props
}: P & Omit<TextProps, 'className'>) => {
  const prefixCls = 'tv-loading';
  const loadingClasses = classNames(prefixCls, {
    [`${prefixCls}__${size}`]: size,
  });
  const classes = classNames(
    'tv-loading__body',
    {
      [`${prefixCls}__body__${size}`]: size,
    },
    className,
  );
  return (
    <View className={loadingClasses}>
      <View className={classes} {...props} />
    </View>
  );
};

export default Loading;

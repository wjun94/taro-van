import { View } from '@tarojs/components';
import { ViewProps } from '@tarojs/components/types/View';
import classNames from 'classnames';
import { ReactNode } from 'react';

export type P = {
  children?: ReactNode;
  visible?: boolean;
  zIndex?: number;
};

export default ({
  children,
  visible,
  zIndex = 50,
  className,
  ...props
}: P & ViewProps) => {
  const prefixCls = 'tv-overlay';
  const classes = classNames(
    prefixCls,
    {
      [`${prefixCls}--active`]: visible,
    },
    className,
  );
  return (
    <View style={{ zIndex: zIndex }} className={classes} {...props}>
      {children}
    </View>
  );
};

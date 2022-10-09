import { View } from '@tarojs/components';
import { ViewProps } from '@tarojs/components/types/View';
import clsx from 'classnames';
import { ReactNode } from 'react';

export type OverlayProps = {
  children?: ReactNode;
  visible?: boolean;
  zIndex?: number;
  animate?: boolean;
};

export default ({
  children,
  visible,
  animate,
  zIndex = 50,
  className,
  ...props
}: OverlayProps & ViewProps) => {
  const prefixCls = 'tv-overlay';
  const classes = clsx(
    prefixCls,
    {
      [`${prefixCls}--open`]: visible,
      [`${prefixCls}--open__animate`]: visible && animate,
      [`${prefixCls}--close__animate`]: !visible && animate,
    },
    className,
  );
  return (
    <View style={{ zIndex: zIndex }} className={classes} {...props}>
      {children}
    </View>
  );
};

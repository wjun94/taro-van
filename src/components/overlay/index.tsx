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
      <View style={{ zIndex: zIndex + 1 }} className='tv-overlay-overlay' />
      <View
        style={{ zIndex: zIndex + 2 }}
        onClick={(e) => e.stopPropagation()}
        className='tv-overlay-container'
      >
        {children}
      </View>
    </View>
  );
};

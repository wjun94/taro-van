import { View } from '@tarojs/components';
import { ViewProps } from '@tarojs/components/types/View';
import classNames from 'classnames';
import { ReactNode } from 'react';
import Overlay from '../overlay';

export type P = {
  children?: ReactNode;
  visible?: boolean;
  onClose?: () => void;
  closeOnMaskClick?: boolean;
  position?: 'top' | 'left' | 'right' | 'bottom';
};

const TvPopup = ({
  className,
  children,
  style,
  closeOnMaskClick = true,
  position = 'bottom',
  onClose,
  ...props
}: P & ViewProps) => {
  const prefixCls = 'tv-popup';
  const classes = classNames(
    prefixCls,
    {
      [`${prefixCls}--${position}`]: position,
      [`${prefixCls}--${position}__open`]: props.visible,
      [`${prefixCls}--${position}__close`]: !props.visible,
    },
    className,
  );
  return (
    <Overlay
      onClick={() => closeOnMaskClick && onClose && onClose()}
      animate
      {...props}
    >
      <View style={style} className={classes}>
        {children}
      </View>
    </Overlay>
  );
};

export default TvPopup;

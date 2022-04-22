import { View } from '@tarojs/components';
import { ViewProps } from '@tarojs/components/types/View';
import classNames from 'classnames';
import { ReactNode } from 'react';
import Flex from '../flex';
import Icon from '../icon';
import Overlay from '../overlay';
import Typography from '../typography';

export type P = {
  children?: ReactNode;
  visible?: boolean;
  onClose?: () => void;
  closeOnMaskClick?: boolean;
  round?: boolean; // 圆角
  title?: string;
  closeIcon?: boolean;
  position?: 'top' | 'left' | 'right' | 'bottom';
};

const TvPopup = ({
  className,
  children,
  style,
  closeOnMaskClick = true,
  position = 'bottom',
  round,
  closeIcon,
  title,
  onClose,
  ...props
}: P & ViewProps) => {
  const prefixCls = 'tv-popup';
  const classes = classNames(
    prefixCls,
    {
      [`${prefixCls}--${position}`]: position,
      [`${prefixCls}--round`]: round,
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
      <View
        style={style}
        onClick={(e) => e.stopPropagation()}
        className={classes}
      >
        <View className={`${prefixCls}--body`}>
          {title && (
            <Flex
              align='center'
              justify='center'
              className={`${prefixCls}--head`}
            >
              {title && <Typography.Title level={2}>{title}</Typography.Title>}
            </Flex>
          )}
          {closeIcon && (
            <Icon onClick={() => onClose && onClose()} icon='icon-cross' />
          )}
          {children}
        </View>
      </View>
    </Overlay>
  );
};

export default TvPopup;

import { View } from '@tarojs/components';
import { ViewProps } from '@tarojs/components/types/View';
import clsx from 'classnames';
import {
  cloneElement,
  ReactElement,
  forwardRef,
  useState,
  useImperativeHandle,
} from 'react';
import Flex from '../flex';
import Icon from '../icon';
import Overlay from '../overlay';
import Typography from '../typography';

export type DialogInstance = {
  show: () => void;
  hide: () => void;
};

export type PopupProps = {
  children?: ReactElement;
  visible?: boolean;
  closeOnMaskClick?: boolean;
  round?: boolean; // 圆角
  title?: string;
  closeIcon?: boolean;
  position?: 'top' | 'left' | 'right' | 'bottom';
  onClose?: () => void;
};

const Popup = ({
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
}: PopupProps & ViewProps) => {
  const prefixCls = 'tv-popup';
  const classes = clsx(
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
            <Icon
              onClick={() => onClose && onClose()}
              className={`${prefixCls}--icon`}
              icon='icon-cross'
            />
          )}
          {children}
        </View>
      </View>
    </Overlay>
  );
};

const Alert = forwardRef<
  DialogInstance,
  Omit<PopupProps & { content?: ReactElement }, 'visible'> &
    Omit<ViewProps, 'onClick'>
>(({ children, content, onClose, ...props }, ref) => {
  const [visible, setVisible] = useState(false);
  useImperativeHandle(ref, () => ({
    show: () => setVisible(true),
    hide: () => setVisible(false),
  }));
  return (
    <>
      {children &&
        cloneElement(children as any, {
          onClick: (e) => {
            setVisible(true);
            if (children.props.onClick) {
              // 设置显示内容
              children.props.onClick(e);
            }
            e.stopPropagation();
          },
        })}
      <Popup
        onClose={() => {
          setVisible(false);
          onClose && onClose();
        }}
        visible={visible}
        {...props}
      >
        {content}
      </Popup>
    </>
  );
});

Popup.Alert = Alert;

export default Popup;

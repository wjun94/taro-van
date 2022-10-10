import { View } from '@tarojs/components';
import { ViewProps } from '@tarojs/components/types/View';
import clsx from 'classnames';
import {
  forwardRef,
  useImperativeHandle,
  ReactNode,
  ReactElement,
  FC,
  useState,
  cloneElement,
} from 'react';
import Typography from '../typography';
import Button from '../button';
import Flex from '../flex';
import Overlay from '../overlay';

export type DialogProps = {
  children?: ReactElement;
  visible?: boolean;
  title?: string;
  showCancelButton?: boolean;
  theme?: 'radio';
  closeOnMaskClick?: boolean;
  content?: ReactNode;
  message?: string;
  footer?: ReactNode;
  cancelButtonText?: string;
  confirmButtonText?: string;
  onConfirm?: () => void | Promise<any>;
  onCancel?: () => void;
};

export type DialogInstance = {
  show: () => void;
  hide: () => void;
};

const Dialog: FC<DialogProps & Omit<ViewProps, 'onClick'>> & {
  Alert: any;
} = ({
  children,
  visible,
  title,
  showCancelButton,
  onConfirm,
  onCancel,
  className,
  message,
  theme,
  closeOnMaskClick,
  content,
  footer,
  cancelButtonText = '取消',
  confirmButtonText = '确定',
  ...props
}) => {
  const [confireLoading, setConfireLoading] = useState(false);
  const [cancelLoading, setCancelLoading] = useState(false);
  const prefixCls = 'tv-dialog';
  const classes = clsx(
    prefixCls,
    {
      [`${prefixCls}-container`]: true,
    },
    className,
  );
  const onConfirmBtn = () => {
    if (onConfirm) {
      const target: any = onConfirm();
      if (target && typeof target.then === 'function') {
        setConfireLoading(true);
        try {
          target.finally(() => setConfireLoading(false));
        } catch (err) {
          console.log(err);
          setConfireLoading(false);
        }
      }
    }
  };
  const onCancelBtn = () => {
    if (onCancel) {
      const target: any = onCancel();
      if (target && typeof target.then === 'function') {
        setCancelLoading(true);
        try {
          target.finally(() => setCancelLoading(false));
        } catch (err) {
          console.log(err);
          setCancelLoading(false);
        }
      }
    }
  };
  const confirmProps: any = {
    onClick: onConfirmBtn,
    loading: confireLoading,
    type: 'primary',
  };
  const cancelProps: any = {
    onClick: onCancelBtn,
    loading: cancelLoading,
  };
  /** 按钮底部普通按钮 */
  const FooterBaseItem = () => {
    return (
      <>
        {showCancelButton ? (
          <>
            <Button
              {...cancelProps}
              className={`${prefixCls}-footer--btn ${prefixCls}-footer--btn--more`}
            >
              {cancelButtonText}
            </Button>
            <Button
              {...confirmProps}
              plain
              className={`${prefixCls}-footer--btn ${prefixCls}-footer--btn--more`}
            >
              {confirmButtonText}
            </Button>
          </>
        ) : (
          <Button
            {...confirmProps}
            block
            plain
            className={`${prefixCls}-footer--btn`}
          >
            确定
          </Button>
        )}
      </>
    );
  };

  /** 按钮底部圆形按钮 */
  const FooterRadioItem = () => {
    return (
      <>
        {showCancelButton ? (
          <Flex className={`${prefixCls}-footer--radio`} justify='center'>
            <Button
              {...cancelProps}
              shape='rounded'
              className={`${prefixCls}-footer--radio__btn`}
            >
              取消
            </Button>
            <Button
              {...confirmProps}
              shape='rounded'
              className={`${prefixCls}-footer--radio__btn`}
            >
              确定
            </Button>
          </Flex>
        ) : (
          <Button
            {...confirmProps}
            block
            plain
            className={`${prefixCls}-footer--btn`}
          >
            确定
          </Button>
        )}
      </>
    );
  };
  return (
    <Overlay
      onClick={() => closeOnMaskClick && onCancel && onCancel()}
      visible={visible}
      {...props}
    >
      <View className={`${prefixCls}-body`}>
        <View className={classes} onClick={(e) => e.stopPropagation()}>
          {title && (
            <Typography.Title className={`${prefixCls}-head`} align='center'>
              {title}
            </Typography.Title>
          )}
          {content || (
            <Flex className={`${prefixCls}-content`} justify='center'>
              {message ? (
                <Typography.Text>{message}</Typography.Text>
              ) : (
                children
              )}
            </Flex>
          )}
          {footer || (
            <Flex className={`${prefixCls}-footer`} wrap='nowrap'>
              {theme === 'radio' ? <FooterRadioItem /> : <FooterBaseItem />}
            </Flex>
          )}
        </View>
      </View>
    </Overlay>
  );
};

const Alert = forwardRef<
  DialogInstance,
  Omit<DialogProps, 'visible'> & Omit<ViewProps, 'onClick'>
>(({ children, onCancel, onConfirm, ...props }, ref) => {
  const [visible, setVisible] = useState(false);
  useImperativeHandle(ref, () => ({
    show: () => setVisible(true),
    hide: () => setVisible(false),
  }));
  const onAlterCancel = () => {
    setVisible(false);
    onCancel && onCancel();
  };
  const onAlterConfirm = () => {
    setVisible(false);
    onConfirm && onConfirm();
  };
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
      <Dialog
        onCancel={onAlterCancel}
        onConfirm={onAlterConfirm}
        visible={visible}
        {...props}
      />
    </>
  );
});

Dialog.Alert = Alert;

export default Dialog;

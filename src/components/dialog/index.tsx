import { View } from '@tarojs/components';
import { ViewProps } from '@tarojs/components/types/View';
import classNames from 'classnames';
import {
  forwardRef,
  useImperativeHandle,
  ReactNode,
  FC,
  useState,
  cloneElement,
} from 'react';
import Typography from '../typography';
import Button from '../button';
import Flex from '../flex';
import Overlay from '../overlay';

export type P = {
  children?: ReactNode;
  visible?: boolean;
  title?: string;
  showCancelButton?: boolean;
  theme?: 'radio';
  closeOnMaskClick?: boolean;
  content?: ReactNode;
  message?: string;
  footer?: ReactNode;
  onConfirm?: () => void | Promise<any>;
  onCancel?: () => void;
};

export type DialogInstance = {
  show: () => void;
  hide: () => void;
};

const Dialog: FC<P & Omit<ViewProps, 'onClick'>> & {
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
  ...props
}) => {
  const [confireLoading, setConfireLoading] = useState(false);
  const [cancelLoading, setCancelLoading] = useState(false);
  const prefixCls = 'tv-dialog';
  const classes = classNames(
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
    plain: true,
  };
  /** ???????????????????????? */
  const FooterBaseItem = () => {
    return (
      <>
        {showCancelButton ? (
          <>
            <Button
              {...cancelProps}
              className={`${prefixCls}-footer--btn ${prefixCls}-footer--btn--more`}
            >
              ??????
            </Button>
            <Button
              {...confirmProps}
              plain
              className={`${prefixCls}-footer--btn ${prefixCls}-footer--btn--more`}
            >
              ??????
            </Button>
          </>
        ) : (
          <Button
            {...confirmProps}
            block
            plain
            className={`${prefixCls}-footer--btn`}
          >
            ??????
          </Button>
        )}
      </>
    );
  };

  /** ???????????????????????? */
  const FooterRadioItem = () => {
    return (
      <>
        {showCancelButton ? (
          <Flex className={`${prefixCls}-footer--radio`} justify='center'>
            <Button
              {...cancelProps}
              round
              className={`${prefixCls}-footer--radio__btn`}
            >
              ??????
            </Button>
            <Button
              {...confirmProps}
              round
              className={`${prefixCls}-footer--radio__btn`}
            >
              ??????
            </Button>
          </Flex>
        ) : (
          <Button
            {...confirmProps}
            block
            plain
            className={`${prefixCls}-footer--btn`}
          >
            ??????
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
  Omit<P, 'visible'> & Omit<ViewProps, 'onClick'>
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
          onClick: () => {
            setVisible(true);
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

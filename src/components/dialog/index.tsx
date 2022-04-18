import { View } from '@tarojs/components';
import { ViewProps } from '@tarojs/components/types/View';
import classNames from 'classnames';
import { ReactNode, FC } from 'react';
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
  onConfirm?: () => void;
  onCancel?: () => void;
};

const Dialog: FC<P & Omit<ViewProps, 'onClick'>> = ({
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
  ...props
}) => {
  const prefixCls = 'tv-dialog';
  const classes = classNames(
    prefixCls,
    {
      [`${prefixCls}-container`]: true,
    },
    className,
  );
  /** 按钮底部普通按钮 */
  const FooterBaseItem = () => {
    return (
      <>
        {showCancelButton ? (
          <>
            <Button
              onClick={onCancel}
              plain
              className={`${prefixCls}-footer--btn ${prefixCls}-footer--btn--more`}
            >
              取消
            </Button>
            <Button
              onClick={onConfirm}
              plain
              type='primary'
              className={`${prefixCls}-footer--btn ${prefixCls}-footer--btn--more`}
            >
              确定
            </Button>
          </>
        ) : (
          <Button
            block
            onClick={onConfirm}
            plain
            type='primary'
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
              onClick={onCancel}
              plain
              round
              className={`${prefixCls}-footer--radio__btn`}
            >
              取消
            </Button>
            <Button
              onClick={onConfirm}
              round
              type='primary'
              className={`${prefixCls}-footer--radio__btn`}
            >
              确定
            </Button>
          </Flex>
        ) : (
          <Button
            block
            onClick={onConfirm}
            plain
            type='primary'
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
          <Typography.Title className={`${prefixCls}-head`} align='center'>
            {title}
          </Typography.Title>
          {content || (
            <Flex className={`${prefixCls}-content`} justify='center'>
              {message ? (
                <Typography.Text>{message}</Typography.Text>
              ) : (
                children
              )}
            </Flex>
          )}
          <Flex className={`${prefixCls}-footer`} wrap='nowrap'>
            {theme === 'radio' ? <FooterRadioItem /> : <FooterBaseItem />}
          </Flex>
        </View>
      </View>
    </Overlay>
  );
};

export default Dialog;

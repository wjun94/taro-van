import { View } from '@tarojs/components';
import { ViewProps } from '@tarojs/components/types/View';
import classNames from 'classnames';
import { ReactNode } from 'react';
import Typography from '../typography';
import Button from '../button';
import Flex from '../flex';
import Overlay from '../overlay';

export type P = {
  children?: ReactNode;
  visible?: boolean;
  title?: string;
  showCancelButton?: boolean;
  onConfirm?: () => void;
  onCancel?: () => void;
};

const Dialog = ({
  children,
  visible,
  title,
  showCancelButton,
  onConfirm,
  onCancel,
  className,
  ...props
}: P & Omit<ViewProps, 'onClick'>) => {
  const prefixCls = 'tv-dialog';
  const classes = classNames(
    prefixCls,
    {
      [`${prefixCls}-container`]: true,
    },
    className,
  );
  return (
    <Overlay visible={visible} {...props}>
      <View className={classes}>
        <Typography.Title className={`${prefixCls}-head`} align='center'>
          {title}
        </Typography.Title>
        <View className={`${prefixCls}-content`}>{children}</View>
        <Flex className={`${prefixCls}-footer`}>
          {showCancelButton ? (
            <>
              <Button
                onClick={onCancel}
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
        </Flex>
      </View>
    </Overlay>
  );
};

export default Dialog;
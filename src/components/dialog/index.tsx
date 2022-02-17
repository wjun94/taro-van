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
  return (
    <Overlay visible={visible} {...props}>
      <View className={`${prefixCls}-body`}>
        <View className={classes} onClick={(e) => e.stopPropagation()}>
          <Typography.Title className={`${prefixCls}-head`} align='center'>
            {title}
          </Typography.Title>
          <Flex className={`${prefixCls}-content`} justify='center'>
            {children}
          </Flex>
          <Flex className={`${prefixCls}-footer`} wrap='nowrap'>
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
          </Flex>
        </View>
      </View>
    </Overlay>
  );
};

export default Dialog;

import { cloneElement, ReactElement } from 'react';
import { View } from '@tarojs/components';
import { ViewProps } from '@tarojs/components/types/View';
import cls from 'classnames';
import Button from '../button';
import Empty from '../empty';
import Flex from '../flex';

export type P = {
  children?: ReactElement;
  className?: string;
  spinning?: boolean; // 是否在加载中
  error?: boolean; // 是否加载失败
  refresh?: () => void;
};

// 加载中
const Spin = ({
  children,
  className,
  spinning = true,
  error,
  refresh,
  ...props
}: P & ViewProps) => {
  const prefixCls = 'tv-loader';
  if (error)
    return (
      <Empty description='服务端异常'>
        <Button type='primary' onClick={refresh} size='mini' className='mt-20'>
          刷新试试
        </Button>
      </Empty>
    );
  const classes = cls(prefixCls, className);
  return (
    <View className={classes} {...props}>
      {spinning && (
        <Flex
          align='center'
          justify='center'
          className={children ? 'tv-loader-container' : 'tv-loader-box'}
        >
          <View className='tv-loader-main' />
        </Flex>
      )}
      {children &&
        cloneElement(children as any, {
          className: `${children.props.className} ${
            spinning && 'tv-loader-main_disabled'
          }`,
        })}
    </View>
  );
};

export default Spin;

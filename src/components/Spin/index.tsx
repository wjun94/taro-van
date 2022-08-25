import { ReactElement } from 'react';
import { View } from '@tarojs/components';
import { ViewProps } from '@tarojs/components/types/View';
import cls from 'classnames';
import Button from '../button';
import Empty from '../empty';

export type P = {
  children?: ReactElement | ReactElement[] | null | string;
  className?: string;
  spinning?: boolean; // 是否在加载中
  error?: boolean; // 是否加载失败
  refresh?: () => void;
};

// 加载中
const Spin = ({
  children,
  className,
  spinning,
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
  if (spinning) return <View className='tv-loader-main' />;
  const classes = cls(prefixCls, className);
  return (
    <View className={classes} {...props}>
      {children}
    </View>
  );
};

export default Spin;

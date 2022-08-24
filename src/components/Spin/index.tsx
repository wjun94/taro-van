import { ReactElement } from 'react';
import { View } from '@tarojs/components';
import { ViewProps } from '@tarojs/components/types/View';
import Button from '../button';
import Empty from '../Empty';
import Loading from '../Loading';

export type P = {
  children?: ReactElement | ReactElement[] | null | string;
  className?: string;
  loading?: boolean; // 是否在加载中
  error?: Error | undefined; // 是否加载失败
  refresh?: () => void;
};

// 加载中
const Spin = ({
  children,
  className,
  loading,
  error,
  refresh,
  ...props
}: P & ViewProps) => {
  if (error)
    return (
      <Empty description='服务端异常'>
        <Button type='primary' onClick={refresh} size='mini' className='mt-20'>
          刷新试试
        </Button>
      </Empty>
    );
  if (loading) return <Loading />;
  return (
    <View className={className} {...props}>
      {children}
    </View>
  );
};

export default Spin;

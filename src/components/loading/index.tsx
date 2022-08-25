import { View } from '@tarojs/components';
import { TextProps } from '@tarojs/components/types/Text';
import classNames from 'classnames';

export type P = {
  className?: string;
};

const Loading = ({ className, ...props }: P & Omit<TextProps, 'className'>) => {
  const prefixCls = 'tv-loading';
  const loadingClasses = classNames(prefixCls);
  return <View className={prefixCls}></View>;
};

export default Loading;

import { View } from '@tarojs/components';
import { TextProps } from '@tarojs/components/types/Text';
import clsx from 'classnames';

export type LoadingProps = {
  className?: string;
  color?: string;
};

const Loading = ({
  className,
  color = 'gray',
  ...props
}: LoadingProps & Omit<TextProps, 'className'>) => {
  const prefixCls = 'tv-loading';
  const loadingClasses = clsx(prefixCls, className);
  return (
    <View style={{ borderColor: color }} className={loadingClasses} {...props}>
      <View
        style={{ borderColor: `${color} transparent` }}
        className='tv-loading-item'
      />
    </View>
  );
};

export default Loading;

import { View } from '@tarojs/components';
import { TextProps } from '@tarojs/components/types/Text';
import classNames from 'classnames';

export type P = {
  className?: string;
  color?: string;
};

const Loading = ({
  className,
  color = 'gray',
  ...props
}: P & Omit<TextProps, 'className'>) => {
  const prefixCls = 'tv-loading';
  const loadingClasses = classNames(prefixCls, className);
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

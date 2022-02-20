import { Text } from '@tarojs/components';
import { TextProps } from '@tarojs/components/types/Text';

export type P = {
  icon: string;
  className?: string;
  size?: 'md' | 'lg' | 'xl';
};

const Icon = ({
  icon,
  className,
  size,
  ...props
}: P & Omit<TextProps, 'className'>) => {
  return (
    <Text className={`iconfont ${icon} ${className} icon-${size}`} {...props} />
  );
};

export default Icon;

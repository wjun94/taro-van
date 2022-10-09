import { View } from '@tarojs/components';
import { ReactNode } from 'react';
import { ViewProps } from '@tarojs/components/types/View';
import clsx from 'classnames';
import Typography from '../typography';
import Flex from '../flex';

export type CardProps = {
  children?: ReactNode;
  extra?: ReactNode;
  title?: ReactNode;
  className?: string;
  round?: boolean;
};

const Card = ({
  className,
  title,
  children,
  extra,
  round,
  ...props
}: CardProps & Omit<ViewProps, 'className'>) => {
  const prefixCls = 'tv-card';
  const classes = clsx(
    prefixCls,
    {
      [`${prefixCls}-round`]: round,
    },
    className,
  );
  return (
    <View className={classes} {...props}>
      {title && (
        <Flex
          align='center'
          justify='between'
          className='tv-card-header tv-cell--border'
        >
          <Typography.Title level={2}>{title}</Typography.Title>
          {extra}
        </Flex>
      )}
      <View className='tv-card-body'>{children}</View>
    </View>
  );
};

export default Card;

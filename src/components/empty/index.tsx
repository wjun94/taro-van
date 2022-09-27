import { ReactNode } from 'react';
import { ViewProps } from '@tarojs/components/types/View';
import clsx from 'clsx';
import Typography from '../typography';
import Icon from '../icon';
import Flex from '../flex';

export type EmptyProps = {
  children?: ReactNode;
  className?: string;
  description?: ReactNode;
  image?: ReactNode;
};

const Empty = ({
  children,
  className,
  description,
  image,
  ...props
}: EmptyProps & Omit<ViewProps, 'className'>) => {
  const prefixCls = 'tv-empty';
  const classes = clsx(prefixCls, className);
  return (
    <Flex
      justify='center'
      align='center'
      direction='column'
      className={classes}
      {...props}
    >
      {image || (
        <Icon icon='icon-planet' className='tv-empty__icon' size='xxl' />
      )}
      {description && (
        <Typography.Text type='secondary' size='sm' className='tv-empty__desc'>
          {description}
        </Typography.Text>
      )}
      {children}
    </Flex>
  );
};

export default Empty;

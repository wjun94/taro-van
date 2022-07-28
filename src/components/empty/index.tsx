import { ReactNode } from 'react';
import { ViewProps } from '@tarojs/components/types/View';
import classNames from 'classnames';
import Typography from '../typography';
import Icon from '../icon';
import Flex from '../flex';

export type P = {
  children?: ReactNode;
  className?: string;
  description?: ReactNode;
  image?: ReactNode;
};

const TvEmpty = ({
  children,
  className,
  description,
  image,
  ...props
}: P & Omit<ViewProps, 'className'>) => {
  const prefixCls = 'tv-empty';
  const classes = classNames(prefixCls, className);
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

export default TvEmpty;

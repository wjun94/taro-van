import { View } from '@tarojs/components';
import { ViewProps } from '@tarojs/components/types/View';
import classNames from 'classnames';
import { FC } from 'react';
import Typography from '../typography';
import Icon from '../Icon';
import Flex from '../flex';

export type P = {
  title?: string;
  value?: string;
  intro?: string;
  isLink?: boolean;
};

const Cell: FC<P & ViewProps> = ({
  title,
  value,
  isLink,
  className,
  intro,
  ...props
}) => {
  const prefixCls = 'tv-cell';
  const classes = classNames(
    prefixCls,
    `${prefixCls}--border`,
    {
      [`${prefixCls}--link`]: isLink,
    },
    className,
  );
  return (
    <Flex className={classes} justify='between' {...props}>
      <View className={`${prefixCls}-title`}>
        <Typography.Text>{title}</Typography.Text>
        <Typography.Text type='secondary'>{intro}</Typography.Text>
      </View>
      <Flex align='center' className={`${prefixCls}-right`}>
        <Typography.Text type='secondary'>{value}</Typography.Text>
        {isLink && <Icon icon='icon-arrow' />}
      </Flex>
    </Flex>
  );
};

export default Cell;

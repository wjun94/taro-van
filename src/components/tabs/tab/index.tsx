import { View } from '@tarojs/components';
import { ReactNode, useContext } from 'react';
import clsx from 'clsx';
import { ViewProps } from '@tarojs/components/types/View';
import { tabsContext } from '../index';
import Typography from '../../typography';

export type TabProps = {
  title: string;
  value: string;
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  onTitle?: (value: string) => void;
};

const Tab = ({
  title,
  value,
  disabled,
  className,
  onTitle,
}: TabProps & Omit<ViewProps, 'className'>) => {
  const initValue = useContext(tabsContext);
  const prefixCls = 'tv-tab';
  const classes = clsx(
    prefixCls,
    {
      [`${prefixCls}__actived`]: value === initValue,
    },
    className,
  );
  const titleClasses = clsx({
    [`${prefixCls}__title`]: true,
    [`${prefixCls}__disabled`]: disabled,
  });
  return (
    <View className={classes}>
      <View
        onClick={() => {
          onTitle && onTitle(value);
        }}
        className={`${prefixCls}__head`}
      >
        <Typography.Title level={2} className={titleClasses}>
          {title}
        </Typography.Title>
      </View>
    </View>
  );
};

export default Tab;

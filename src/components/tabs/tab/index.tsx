import { View } from '@tarojs/components';
import { ReactNode, useContext } from 'react';
import classNames from 'classnames';
import { tabsContext } from '../index';
import Typography from '../../typography';

export type P = {
  title: string;
  value: string;
  index?: number;
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  onTitle?: (value: string) => void;
};

const TvTab = ({ title, value, children, disabled, className, onTitle }: P) => {
  const initValue = useContext(tabsContext);
  const prefixCls = 'tv-tab';
  const classes = classNames(
    prefixCls,
    {
      [`${prefixCls}__actived`]: value === initValue,
    },
    className,
  );
  const titleClasses = classNames({
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
        <Typography.Title className={titleClasses}>{title}</Typography.Title>
      </View>
      <View>{children}</View>
    </View>
  );
};

export default TvTab;

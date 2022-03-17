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
  onTitle?: (value: string, index: number | undefined) => void;
};

const TvTab = ({ title, value, children, className, index, onTitle }: P) => {
  const initValue = useContext(tabsContext);
  const prefixCls = 'tv-tab';
  const classes = classNames(prefixCls, className);
  const titleClasses = classNames({
    [`${prefixCls}__title`]: true,
    [`${prefixCls}__title--actived`]: index === initValue.index,
  });
  return (
    <View className={classes}>
      <View className={`${prefixCls}__head`}>
        <Typography.Title
          onClick={() => onTitle && onTitle(value, index)}
          className={titleClasses}
        >
          {title}
        </Typography.Title>
      </View>
      <View>{children}</View>
    </View>
  );
};

export default TvTab;

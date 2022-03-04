import { View } from '@tarojs/components';
import { InputProps } from '@tarojs/components/types/Input';
import classNames from 'classnames';
import { FC, ReactNode } from 'react';
import Typography from '../typography';

export type P = {
  label?: string;
  error?: boolean;
  errorMsg?: string;
  intro?: string;
  required?: boolean;
  children?: ReactNode;
  align?: 'start' | 'center';
};

const Label: FC<P & Omit<InputProps, 'type'>> = ({
  children,
  error,
  errorMsg,
  intro,
  label,
  required,
  className,
  align,
  ...props
}) => {
  const prefixCls = 'tv-label';
  const classes = classNames(prefixCls, 'tv-cell--border', className);
  const containerClasses = classNames(`${prefixCls}-container`, {
    [`${prefixCls}-container__start`]: intro || errorMsg || align === 'start',
  });
  const labelClasses = classNames(`${prefixCls}-container__label`, {
    [`${prefixCls}-container__label--required`]: required,
    [`${prefixCls}-container__label--disabled`]: props.disabled,
  });
  const contentClasses = classNames(`${prefixCls}-container__content`, {
    [`${prefixCls}-container__content--disabled`]: props.disabled,
    [`${prefixCls}-container__content--error`]: error,
  });

  return (
    <View className={classes}>
      <View className={`${containerClasses}`}>
        <View className={labelClasses}>
          <Typography.Text type='secondary'>{label}</Typography.Text>
        </View>
        <View className={contentClasses}>
          {children}
          {intro && (
            <Typography.Text block size='sm' type='secondary'>
              {intro}
            </Typography.Text>
          )}
          {errorMsg && (
            <Typography.Text block size='xs' type='danger'>
              {errorMsg}
            </Typography.Text>
          )}
        </View>
      </View>
    </View>
  );
};

export default Label;

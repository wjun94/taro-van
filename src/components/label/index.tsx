import { View } from '@tarojs/components';
import { InputProps } from '@tarojs/components/types/Input';
import clsx from 'clsx';
import { FC, ReactNode } from 'react';
import Typography from '../typography';

export type LabelProps = {
  label?: string;
  error?: boolean;
  errorMsg?: string;
  intro?: string;
  required?: boolean;
  children?: ReactNode;
  align?: 'start' | 'center';
};

const Label: FC<LabelProps & Omit<InputProps, 'type'>> = ({
  children,
  error,
  errorMsg,
  intro,
  label,
  required,
  className,
  align,
  disabled,
}) => {
  const prefixCls = 'tv-label';
  const classes = clsx(prefixCls, 'tv-cell--border', className);
  const containerClasses = clsx(`${prefixCls}-container`, {
    [`${prefixCls}-container__start`]: intro || errorMsg || align === 'start',
  });
  const labelClasses = clsx(`${prefixCls}-container__label`, {
    [`${prefixCls}-container__label--required`]: required,
    [`${prefixCls}-container__label--disabled`]: disabled,
  });
  const contentClasses = clsx(`${prefixCls}-container__content`, {
    [`${prefixCls}-container__content--disabled`]: disabled,
    [`${prefixCls}-container__content--error`]: error,
  });

  return (
    <View className={classes}>
      <View className={`${containerClasses}`}>
        <View className={labelClasses}>
          <Typography.Text>{label}</Typography.Text>
        </View>
        <View className={contentClasses}>
          {children}
          {intro && (
            <Typography.Text block size='sm' type='secondary'>
              {intro}
            </Typography.Text>
          )}
          {errorMsg && (
            <Typography.Text
              block
              size='xs'
              className='tv-label-error'
              type='danger'
            >
              {errorMsg}
            </Typography.Text>
          )}
        </View>
      </View>
    </View>
  );
};

export default Label;

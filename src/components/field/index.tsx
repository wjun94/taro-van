import { Input, View } from '@tarojs/components';
import { InputProps } from '@tarojs/components/types/Input';
import classNames from 'classnames';
import { FC, ReactNode } from 'react';
import Typography from '../typography';

export type P = {
  label?: string;
  errorMsg?: string;
  rightItem?: ReactNode;
  intro?: string;
  inputAlign?: 'center' | 'right';
  required?: boolean;
  error?: boolean;
  type?: 'text' | 'number' | 'idcard' | 'digit' | 'password';
};

const Field: FC<P & Omit<InputProps, 'type'>> = ({
  label,
  className,
  error,
  errorMsg,
  rightItem,
  intro,
  required,
  type,
  inputAlign,
  ...props
}) => {
  const prefixCls = 'tv-field';
  const classes = classNames(prefixCls, className);
  const containerClasses = classNames(`${prefixCls}-container`, {
    [`${prefixCls}-container__start`]: intro || errorMsg,
  });
  const labelClasses = classNames(`${prefixCls}-container__label`, {
    [`${prefixCls}-container__label--required`]: required,
    [`${prefixCls}-container__label--disabled`]: props.disabled,
  });
  const inputClasses = classNames(`${prefixCls}-container__input`, {
    [`${prefixCls}-container__input--${inputAlign}`]: inputAlign,
    [`${prefixCls}-container__input--disabled`]: props.disabled,
    [`${prefixCls}-container__input--error`]: error,
  });
  return (
    <View className={classes}>
      <View className={`${containerClasses}`}>
        <View className={labelClasses}>
          <Typography.Text type='secondary'>{label}</Typography.Text>
        </View>
        <View className={inputClasses}>
          <View className={`${prefixCls}-container__input--body`}>
            <View className={`${prefixCls}-container__input--body__inp pr-14`}>
              <Input type={type as any} {...props} />
            </View>
            {rightItem && rightItem}
          </View>
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

export default Field;

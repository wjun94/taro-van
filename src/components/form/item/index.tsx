import {
  ReactNode,
  Children,
  cloneElement,
  useContext,
  forwardRef,
  ReactElement,
  useImperativeHandle,
} from 'react';
import { View } from '@tarojs/components';
import clsx from 'classnames';
import Label from '../../label';
import { formContext } from '../index';

export type Rule = {
  required?: boolean;
  message?: string;
  pattern?: RegExp;
};

export type P = {
  children?: ReactNode;
  className?: string;
  rules?: Rule[];
  error?: boolean;
  errorMsg?: string;
  label?: string;
  name?: string;
  noBorder?: boolean;
  align?: 'start' | 'center';
};

const Item = forwardRef(
  (
    { children, align, className, rules, name, noBorder, label, ...props }: P,
    myRef,
  ) => {
    const prefixCls = 'tv-form-item';
    const classes = clsx(
      prefixCls,
      {
        'tv-cell--border': true,
        'tv-form-item__no': noBorder,
      },
      className,
    );
    const initValue = useContext(formContext);
    useImperativeHandle(myRef, () => ({}));
    const config = {
      required: !!(rules && rules.find((item) => item.required)),
      name,
    };
    return (
      <View className={classes}>
        {Children.map(children, (child: ReactElement | any) => {
          if (name) {
            Object.assign(config, {
              defaultValue: initValue[name],
              value: initValue[name],
              ...props,
            });
          }
          if (label || name) {
            return (
              <Label
                label={label}
                align={child.props.type === 'textarea' ? 'start' : align}
                {...config}
              >
                {cloneElement(child, { ...config, errorMsg: '', error: false })}
              </Label>
            );
          }
          return cloneElement(child, {});
        })}
      </View>
    );
  },
);

export default Item;

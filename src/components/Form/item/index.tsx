import {
  ReactNode,
  Children,
  cloneElement,
  useContext,
  forwardRef,
  useImperativeHandle,
} from 'react';
import { View } from '@tarojs/components';
import classNames from 'classnames';
import { formContext } from '../index';

export type Rule = {
  required?: boolean;
  message?: string;
};

export type P = {
  children?: ReactNode;
  className?: string;
  rules?: Rule[];
};

const Item = forwardRef(
  ({ children, className, rules, ...props }: P, myRef) => {
    const prefixCls = 'tv-form';
    const classes = classNames(
      prefixCls,
      {
        'tv-cell--border': true,
      },
      className,
    );
    const initValue = useContext(formContext);
    useImperativeHandle(myRef, () => ({
      validateFields: () => {
        console.log('test--');
      },
    }));
    return (
      <View className={classes} {...props}>
        {Children.map(children, (child: any) => {
          if (child.props.name) {
            return cloneElement(child, {
              // onChange: () => { setValue('1') },
              value: initValue[child.props.name],
              required: rules && rules.find((item) => item.required),
            });
          } else {
            return child;
          }
        })}
      </View>
    );
  },
);

export default Item;

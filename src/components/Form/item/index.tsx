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
import classNames from 'classnames';
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
  name: string;
};

const Item = forwardRef(
  ({ children, className, rules, name, ...props }: P, myRef) => {
    const prefixCls = 'tv-form-item';
    const classes = classNames(
      prefixCls,
      {
        'tv-cell--border': true,
      },
      className,
    );
    const initValue = useContext(formContext);
    useImperativeHandle(myRef, () => ({}));
    const config = {
      // onChange: () => { setValue('1') },
      required: rules && rules.find((item) => item.required),
      name,
    };
    return (
      <View className={classes}>
        {Children.map(children, (child: ReactElement | any) => {
          const type = child.type.name;
          switch (type) {
            case 'Field':
              Object.assign(config, { value: initValue[name], ...props });
              break;
            case 'TvRadioGroup':
              Object.assign(config, {
                defaultValue: initValue[name],
                ...props,
              });
              break;
          }
          return cloneElement(child, config);
        })}
      </View>
    );
  },
);

export default Item;

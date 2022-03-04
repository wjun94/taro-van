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
      required: !!(rules && rules.find((item) => item.required)),
      name,
    };
    return (
      <View className={classes}>
        {Children.map(children, (child: ReactElement | any) => {
          const type = child.type.name;
          switch (type) {
            case 'Field':
              // 输入框
              // 输入框自带Label
              Object.assign(config, { value: initValue[name], ...props });
              return cloneElement(child, config);
            case 'TvRadioGroup':
              Object.assign(config, {
                defaultValue: initValue[name],
                ...props,
              });
              return (
                <Label
                  align={type === 'Uploader' ? 'start' : 'center'}
                  {...config}
                  {...props}
                >
                  {cloneElement(child, config)}
                </Label>
              );
            case 'Uploader':
              // 图片上传
              Object.assign(config, {
                value: initValue[name],
                ...props,
              });
              return (
                <Label
                  align={type === 'Uploader' ? 'start' : 'center'}
                  {...config}
                  {...props}
                >
                  {cloneElement(child, config)}
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

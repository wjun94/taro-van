import { View } from '@tarojs/components';
import { ViewProps } from '@tarojs/components/types/View';
import {
  ReactNode,
  Children,
  cloneElement,
  ReactElement,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react';
import clsx from 'classnames';

export type RadioGroupProps = {
  children?: ReactNode;
  defaultValue?: string;
  value?: string;
  direction?: 'horizontal' | 'vertical';
  onChange?: (value: string) => void;
};

const RadioGroup = ({
  children,
  defaultValue,
  value,
  className,
  direction,
  onChange,
}: RadioGroupProps & ViewProps) => {
  const [checked, setChecked] = useState<string>();
  const prefixCls = 'tv-radio-group';
  const classes = clsx(
    prefixCls,
    {
      [`${prefixCls}--${direction}`]: direction,
    },
    className,
  );
  useLayoutEffect(() => {
    if (defaultValue !== undefined) {
      setChecked(defaultValue);
    }
  }, []);
  useEffect(() => {
    if (value !== undefined) {
      setChecked(value);
    }
  }, [value]);
  return (
    <View className={classes}>
      {Children.map(children, (child: ReactElement) => {
        return cloneElement(child, {
          className: clsx(child.props.className),
          checked: child.props.value === checked,
          onClick: () => {
            if (child.props.disabled) {
              return
            }
            setChecked(child.props.value)
            onChange && onChange(child.props.value)
          }
        });
      })}
    </View>
  );
};

export default RadioGroup;

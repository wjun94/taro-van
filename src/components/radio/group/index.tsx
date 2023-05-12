import { RadioGroup as TaroRadioGroup } from '@tarojs/components';
import { RadioGroupProps as TaroRadioGroupProps } from '@tarojs/components/types/RadioGroup';
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
}: RadioGroupProps & TaroRadioGroupProps) => {
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
    <TaroRadioGroup
      className={classes}
      onChange={(e) => {
        onChange && onChange(e.detail.value)
      }}
    >
      {Children.map(children, (child: ReactElement) => {
        return cloneElement(child, {
          checked: Object.is(child.props.value, checked),
        });
      })}
    </TaroRadioGroup>
  );
};

export default RadioGroup;

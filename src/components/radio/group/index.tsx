import { RadioGroup as TaroRadioGroup } from '@tarojs/components';
import { RadioGroupProps as TaroRadioGroupProps } from '@tarojs/components/types/RadioGroup';
import { ReactNode, Children, cloneElement, ReactElement } from 'react';
import clsx from 'classnames';

export type RadioGroupProps = {
  children?: ReactNode;
  defaultValue?: string;
  direction?: 'horizontal' | 'vertical';
};

const RadioGroup = ({
  children,
  defaultValue,
  className,
  direction,
}: RadioGroupProps & TaroRadioGroupProps) => {
  const prefixCls = 'tv-radio-group';
  const classes = clsx(
    prefixCls,
    {
      [`${prefixCls}--${direction}`]: direction,
    },
    className,
  );
  return (
    <TaroRadioGroup className={classes}>
      {Children.map(children, (child: ReactElement) => {
        return cloneElement(child, {
          checked: defaultValue && Object.is(child.props.value, defaultValue),
        });
      })}
    </TaroRadioGroup>
  );
};

export default RadioGroup;

import { RadioGroup } from '@tarojs/components';
import { RadioGroupProps } from '@tarojs/components/types/RadioGroup';
import { ReactNode, Children, cloneElement, ReactElement } from 'react';
import classNames from 'classnames';

export type P = {
  children?: ReactNode;
  defaultValue?: string;
  direction?: 'horizontal' | 'vertical';
};

const TvRadioGroup = ({
  children,
  defaultValue,
  className,
  direction,
  ...props
}: P & RadioGroupProps) => {
  const prefixCls = 'tv-radio-group';
  const classes = classNames(
    prefixCls,
    {
      [`${prefixCls}--${direction}`]: direction,
    },
    className,
  );
  return (
    <RadioGroup className={classes} {...props}>
      {Children.map(children, (child: ReactElement) => {
        return cloneElement(child, {
          checked: defaultValue && Object.is(child.props.value, defaultValue),
        });
      })}
    </RadioGroup>
  );
};

export default TvRadioGroup;

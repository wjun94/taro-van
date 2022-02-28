import { RadioGroup } from '@tarojs/components';
import { RadioGroupProps } from '@tarojs/components/types/RadioGroup';
import { ReactNode, Children, cloneElement, ReactElement } from 'react';
import classNames from 'classnames';
import Label, { P as LabelProps } from '../../label';

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
}: P & RadioGroupProps & LabelProps) => {
  const prefixCls = 'tv-radio-group';
  const classes = classNames(
    prefixCls,
    {
      [`${prefixCls}--${direction}`]: direction,
    },
    className,
  );
  const GroupItem = (
    <RadioGroup className={classes} {...props}>
      {Children.map(children, (child: ReactElement) => {
        return cloneElement(child, {
          checked: defaultValue && Object.is(child.props.value, defaultValue),
        });
      })}
    </RadioGroup>
  );
  return <>{props.label ? <Label {...props}>{GroupItem}</Label> : GroupItem}</>;
};

export default TvRadioGroup;

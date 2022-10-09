import { Input, CommonEventFunction, InputProps } from '@tarojs/components';
import clsx from 'classnames';
import { useEffect, useState } from 'react';
import Icon from '../icon';
import Flex from '../flex';

export type StepperProps = {
  className?: string;
  max?: number;
  min?: number;
  value?: number;
  disabled?: boolean;
  digits?: number;
  onBlur?: CommonEventFunction<InputProps.inputValueEventDetail>;
  onFocus?: CommonEventFunction<InputProps.inputForceEventDetail>;
  onChange?: (value: number) => void;
};

const Stepper = ({
  className,
  min,
  max,
  disabled,
  digits = 0,
  value = 0,
  onFocus,
  onBlur,
  onChange,
}: StepperProps) => {
  const prefixCls = 'tv-stepper';
  const classes = clsx(
    prefixCls,
    {
      'tv-stepper-disabled': disabled,
    },
    className,
  );
  const [target, setTarget] = useState(0);
  useEffect(() => {
    setTarget(+value.toFixed(digits));
  }, [value]);
  return (
    <Flex className={classes}>
      <Flex
        onClick={() =>
          setTarget((v) => {
            let sub = Number(v) - 1;
            if (min !== undefined && sub < min) {
              sub += 1;
            }
            sub = +sub.toFixed(digits);
            onChange && onChange(sub);
            return sub;
          })
        }
        className={`tv-stepper-btn ${
          ((min && target <= min) || disabled) && 'tv-stepper-btn-disabled'
        }`}
        align='center'
        justify='center'
      >
        <Icon icon='icon-minus' />
      </Flex>
      <Input
        type={digits === 0 ? 'number' : ('digits' as any)}
        onInput={(e) => {
          let result = e.detail.value ? +e.detail.value : 0;
          setTarget(result);
          onChange && onChange(+result);
        }}
        onBlur={(e) => {
          onBlur && onBlur(e);
          if (max !== undefined && target > max) {
            setTarget(+max.toFixed(digits));
          }
          if (min !== undefined && target < min) {
            setTarget(+min.toFixed(digits));
          }
          setTarget((v) => +Number(v).toFixed(digits));
        }}
        onFocus={onFocus}
        value={target.toFixed(digits)}
        className='tv-stepper-input'
      />
      <Flex
        onClick={() =>
          setTarget((v) => {
            let add = Number(v) + 1;
            if (max !== undefined && add > max) {
              add -= 1;
            }
            add = +add.toFixed(digits);
            onChange && onChange(add);
            return add;
          })
        }
        className={`tv-stepper-btn ${
          ((max && target >= max) || disabled) && 'tv-stepper-btn-disabled'
        }`}
        align='center'
        justify='center'
      >
        <Icon icon='icon-plus' />
      </Flex>
    </Flex>
  );
};

export default Stepper;

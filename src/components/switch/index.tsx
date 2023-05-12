import { Switch as TaroSwitch } from '@tarojs/components';
import { useEffect, useState, useLayoutEffect } from 'react';
import clsx from 'classnames';

export type SwitchProps = {
  color?: string;
  type?: 'checkbox' | 'switch';
  disabled?: boolean;
  defaultValue?: boolean;
  value?: boolean;
  className?: string;
  size?: 'small' | 'default' | 'lg';
  onChange?: (value: boolean) => void;
};

const Switch = ({
  value,
  defaultValue,
  size = 'default',
  onChange,
  ...props
}: SwitchProps) => {
  const [isChecked, setIsChecked] = useState(false);
  const prefixCls = 'tv-switch';
  const classes = clsx(prefixCls, {
    [`${prefixCls}-${size}`]: size,
  });

  useLayoutEffect(() => {
    if (defaultValue !== undefined) {
      setIsChecked(defaultValue)
    }
  }, [])

  useEffect(() => {
    if (value !== undefined) {
      setIsChecked(value)
    }
  }, [value]);

  return (
    <TaroSwitch
      {...props}
      onChange={(e) => onChange && onChange(e.detail.value)}
      className={classes}
      checked={isChecked}
    />
  );
};

export default Switch;

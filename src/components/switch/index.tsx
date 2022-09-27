import { Switch as TaroSwitch } from '@tarojs/components';
import clsx from 'clsx';

export type SwitchProps = {
  color?: string;
  type?: 'checkbox' | 'switch';
  disabled?: boolean;
  defaultChecked?: boolean;
  value?: boolean;
  checked?: boolean;
  className?: string;
  size?: 'small' | 'default' | 'lg';
  onChange?: (value: boolean) => void;
};

const Switch = ({
  value,
  checked,
  size = 'default',
  defaultChecked,
  onChange,
  ...props
}: SwitchProps) => {
  const prefixCls = 'tv-switch';
  const classes = clsx(prefixCls, {
    [`${prefixCls}-${size}`]: size,
  });
  return (
    <TaroSwitch
      {...props}
      onChange={(e) => onChange && onChange(e.detail.value)}
      className={classes}
      checked={checked || value || defaultChecked}
    />
  );
};

export default Switch;

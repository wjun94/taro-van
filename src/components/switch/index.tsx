import { Switch } from '@tarojs/components';
import classNames from 'classnames';

export type P = {
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

const TvSwitch = ({
  value,
  checked,
  size = 'default',
  defaultChecked,
  onChange,
  ...props
}: P) => {
  const prefixCls = 'tv-switch';
  const classes = classNames(prefixCls, {
    [`${prefixCls}-${size}`]: size,
  });
  return (
    <Switch
      {...props}
      onChange={(e) => onChange && onChange(e.detail.value)}
      className={classes}
      checked={checked || value || defaultChecked}
    />
  );
};

export default TvSwitch;

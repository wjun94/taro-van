import clsx from 'classnames';
import { useEffect, useState, ReactElement } from 'react';
import RadioGroup from './group';
import { Icon, Flex, Typography } from '../../index';

export type RadioProps = {
  className?: string;
  children?: string;
  disabled?: boolean;
  checked?: boolean;
  value?: string;
  icon?: ReactElement;
  onChange?: () => void;
};

const Radio = ({
  className,
  disabled,
  checked,
  children,
  value,
  onChange,
  icon,
  ...props
}: RadioProps) => {
  const [selected, setSelected] = useState(false);
  const prefixCls = 'tv-radio';
  const classes = clsx(prefixCls, className, {
    'tv-radio__disabled': disabled,
  });
  useEffect(() => {
    if (checked !== undefined) {
      setSelected(checked);
    }
  }, [checked]);
  return (
    <Flex
      onClick={() => onChange && onChange()}
      align='center'
      className={classes}
      {...props}
    >
      {icon && selected ? (
        icon
      ) : (
        <Icon
          className={clsx({ 'tv-radio__primary': checked })}
          icon={selected ? 'icon-radio-selected' : 'icon-radio'}
        />
      )}
      <Typography.Text
        type={disabled ? 'secondary' : 'default'}
        className='tv-radio-text'
      >
        {children}
      </Typography.Text>
    </Flex>
  );
};

Radio.Group = RadioGroup;

export default Radio;

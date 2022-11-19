import { useEffect, useState } from 'react';
import clsx from 'classnames';
import Flex from '../flex';
import Icon from '../icon';

export type SpinProps = {
  className?: string;
  /** 默认值 */
  defaultValue?: number;
  /** 当前数，受控值 */
  value?: number;
  /** star 总数 */
  count?: number;
  /** 图标大小 */
  size?: 'xs' | 'sm' | 'base' | 'lg';
  /** 只读，无法进行交互 */
  disabled?: boolean;
  /** 选择时的回调 */
  onChange?: (value: number) => void;
};

/** 评分 */
const Rate = ({
  defaultValue = 0,
  value = 0,
  onChange,
  className,
  disabled,
  size = 'base',
  count = 5,
  ...props
}: SpinProps) => {
  const [val, setVal] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setVal(defaultValue);
    }, 0);
  }, []);

  useEffect(() => {
    setVal(value);
  }, [value]);

  const prefixCls = 'tv-rate_icon';
  const classes = clsx(
    prefixCls,
    {
      'tv-rate_icon_none': disabled,
      [`${prefixCls}-${size}`]: size,
    },
    className,
  );

  return (
    <Flex className='tv-rate'>
      {new Array(5).fill(1).map((_, idx) => (
        <Icon
          {...props}
          className={`${classes} ${
            idx + 1 <= val ? 'tv-rate_icon_actived' : ''
          }`}
          onClick={() =>
            setVal((v) => {
              const result = v === idx + 1 ? 0 : idx + 1;
              onChange && onChange(result);
              return result;
            })
          }
          key={'star' + idx}
          icon='icon-star'
        />
      ))}
    </Flex>
  );
};

export default Rate;

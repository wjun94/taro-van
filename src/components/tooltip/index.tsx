import cls from 'classnames';
import { cloneElement, useEffect, useState } from 'react';
import type { ViewProps } from '@tarojs/components/types/View';
import Flex from '../flex';
import Typography from '../typography';

export type P = {
  children: React.ReactNode;
  title: React.ReactNode;
  placement?: 'bottom' | 'top';
  color?: string;
  visible?: boolean;
} & ViewProps;

export default ({
  children,
  className,
  title,
  color = '#fff',
  placement = 'bottom',
  visible,
  ...props
}: P) => {
  const prefixCls = 'tv-tooltip';
  const [vis, setVis] = useState(false);
  useEffect(() => {
    if (visible !== undefined) {
      setVis(visible);
    }
  }, [visible]);
  const classes = cls(prefixCls, className);
  const childClasses = cls(`${prefixCls}-alert`, {
    [`${prefixCls}-alert__${placement}`]: placement,
  });
  return (
    <Flex justify='center' className={classes} {...props}>
      {cloneElement(children as React.ReactElement, {
        onClick: (event) => {
          if ((children as React.ReactElement).props.onClick) {
            // 设置显示内容
            (children as React.ReactElement).props.onClick(event);
          }
          setVis((v) => !v);
        },
      })}
      {vis && (
        <Flex justify='center' className={childClasses}>
          <Flex className={`${prefixCls}-body ${prefixCls}-body__${placement}`}>
            {typeof title === 'string' ? (
              <Typography.Text className='tv-tooltip-body__txt'>
                {title}
              </Typography.Text>
            ) : (
              title
            )}
          </Flex>
        </Flex>
      )}
    </Flex>
  );
};

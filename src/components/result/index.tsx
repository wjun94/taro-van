import clsx from 'classnames';
import { cloneElement } from 'react';
import { Typography, Flex, Icon } from '../../index';

type P = {
  /** 结果的状态，决定图标和颜色 */
  status?: 'success';
  /** title 文字 */
  title?: string;
  /** subTitle 文字 */
  subTitle?: string;
  /** 操作区 */
  extra?: JSX.Element[];
  /** 自定义 icon */
  icon?: JSX.Element;
  className?: string;
};

const Result = ({
  status = 'success',
  title,
  icon,
  className,
  subTitle,
  extra,
}: P) => {
  const prefixCls = 'tv-result';
  const classes = clsx(prefixCls, className);
  return (
    <>
      <Flex className={classes} direction='column' align='center'>
        {icon ||
          (status === 'success' && (
            <Icon className='tv-result-icon' icon='icon-success' />
          ))}
        <Typography.Text className='tv-result-title'>{title}</Typography.Text>
        <Typography.Text type='secondary' className='tv-result-sub-title'>
          {subTitle}
        </Typography.Text>
        <Flex className='tv-result-footer'>
          {extra &&
            extra.map((item) =>
              cloneElement(item, {
                className: clsx(item.props.className, 'tv-result-footer-btn'),
              }),
            )}
        </Flex>
      </Flex>
    </>
  );
};

export default Result;

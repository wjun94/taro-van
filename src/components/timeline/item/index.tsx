import { ReactElement, cloneElement } from 'react';
import clsx from 'classnames';
import Flex from '../../flex';
import Typography from '../../typography';

export type TimelineItemProps = {
  /** 自定义时间轴点 */
  dot?: ReactElement;
  /** 指定圆圈颜色 */
  color?: string;
  /** 边框样式 */
  borderStyle?: 'dashed' | 'solid';
  children?: ReactElement | string;
  className?: string;
};

const Item = ({
  children,
  color,
  dot,
  borderStyle = 'solid',
  className,
}: TimelineItemProps) => {
  const classes = clsx('tv-timeline-item', className);
  return (
    <Flex className={classes}>
      <Flex>
        {dot ? (
          cloneElement(dot, {
            className: `tv-timeline-item_custom ${dot.props.className}`,
          })
        ) : (
          <Flex style={{ color }} className='tv-timeline-item_head' />
        )}
      </Flex>
      <Flex
        style={{ borderColor: color, borderStyle: borderStyle }}
        className='tv-timeline-item_tail'
      />
      <Flex className='tv-timeline-item_content'>
        {typeof children === 'string' ? (
          <Typography.Text>{children}</Typography.Text>
        ) : (
          children
        )}
      </Flex>
    </Flex>
  );
};

export default Item;

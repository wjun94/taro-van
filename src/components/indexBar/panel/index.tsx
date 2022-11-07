import { ReactElement } from 'react';
import Flex from '../../flex';
import Typography from '../../typography';

export type PanelProps = {
  children?: ReactElement;
  /** 左侧主内容区的分组标题	 */
  title?: ReactElement | string;
  /** 索引（不可以重复） */
  index?: string;
};

const Panel = ({ title, children }: PanelProps) => {
  return (
    <Flex direction='column'>
      {typeof title === 'string' ? (
        <Typography.Text type='secondary' className='panel-title'>
          {title}
        </Typography.Text>
      ) : (
        title
      )}
      {children}
    </Flex>
  );
};

export default Panel;

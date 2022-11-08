import { ReactElement } from 'react';
import { View } from '@tarojs/components';
import Flex from '../../flex';
import Typography from '../../typography';

export type PanelProps = {
  children?: ReactElement;
  /** 左侧主内容区的分组标题	 */
  title: ReactElement | string;
  /** 索引（不可以重复） */
  index: string | number;
};

const Panel = ({ title, index, children }: PanelProps) => {
  return (
    <Flex direction='column'>
      <View id={`panel-${index}`}>
        {typeof title === 'string' ? (
          <Typography.Text type='secondary' className='tv-panel-title'>
            {title}
          </Typography.Text>
        ) : (
          title
        )}
      </View>

      <View className='tv-panel-container'>{children}</View>
    </Flex>
  );
};

export default Panel;

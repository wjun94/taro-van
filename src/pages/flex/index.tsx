import { View } from '@tarojs/components';
import { Fragment } from 'react';
import Flex from '../../components/flex';
import Typography from '../../components/typography';

import './index.less';

const Index = () => {
  return (
    <View className='py-20'>
      <Typography.Title className='pl-20' level={3}>
        Align
      </Typography.Title>
      {['start', 'end', 'center', 'around', 'evenly'].map((item) => (
        <Fragment key={item}>
          <Typography.Text type='secondary' className='block pl-20 my-title'>
            {item}
          </Typography.Text>
          <View className={`example-flex example-align-${item}`}>
            <Flex
              align={item as any}
              className={`example-align_container example-align-${item}_container`}
            >
              <View className={`example-box example-align-${item}_box`} />
              <View className={`example-box example-align-${item}_box`} />
              <View className={`example-box example-align-${item}_box`} />
              <View className={`example-box example-align-${item}_box`} />
            </Flex>
          </View>
        </Fragment>
      ))}
    </View>
  );
};

export default Index;

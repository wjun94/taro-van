import { View } from '@tarojs/components';
import { Fragment } from 'react';
import Flex from '../../components/flex';
import Typography from '../../components/typography';

import './index.less';

const Index = () => {
  return (
    <>
      <Typography.Title className='pl-20' level={3}>
        Align
      </Typography.Title>
      {['start', 'end', 'center', 'around', 'evenly'].map((item) => (
        <Fragment key={item}>
          <Typography.Title className='block pl-20 py-12'>
            {item}
          </Typography.Title>
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
    </>
  );
};

export default Index;

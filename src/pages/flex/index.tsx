import { View } from '@tarojs/components';
import Flex from '../../components/flex';

import './index.less';

const Index = () => {
  return (
    <>
      {['start', 'end', 'center', 'around', 'evenly'].map((item) => (
        <View className={`example-flex example-align-${item}`} key={item}>
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
      ))}
    </>
  );
};

export default Index;

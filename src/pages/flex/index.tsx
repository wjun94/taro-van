import { View } from '@tarojs/components';
import { Fragment } from 'react';
import Flex from '../../components/flex';
import Typography from '../../components/typography';

import './index.less';

const Index = () => {
  return (
    <View className='pt-20'>
      <Typography.Title className='pl-20 pt-20' level={3}>
        Align
      </Typography.Title>
      {['start', 'end', 'center', 'baseline', 'stretch'].map((item) => (
        <Fragment key={item}>
          <Typography.Text
            type='secondary'
            className='block pl-20 pt-20 my-title'
          >
            {item}
          </Typography.Text>
          <View className={`example-flex example-align-${item}`}>
            <Flex
              align={item as any}
              className={`example-align_container example-align-${item}_container`}
            >
              <View className={`example-box example-align-${item}_box`} />
              <View className={`example-box__1 example-align-${item}_box`} />
              <View className={`example-box__2 example-align-${item}_box`} />
            </Flex>
          </View>
        </Fragment>
      ))}

      <Typography.Title className='pl-20 pt-20' level={3}>
        Justify
      </Typography.Title>
      {['start', 'center', 'end', 'between', 'around', 'evenly'].map((item) => (
        <Fragment key={item}>
          <Typography.Text
            type='secondary'
            className='block pl-20 pt-20 my-title'
          >
            {item}
          </Typography.Text>
          <View className={`example-flex example-justify-${item}`}>
            <Flex
              justify={item as any}
              className={`example-justify_container example-justify-${item}_container`}
            >
              <View className={`example-box example-justify-${item}_box`} />
              <View className={`example-box__2 example-justify-${item}_box`} />
            </Flex>
          </View>
        </Fragment>
      ))}

      <Typography.Title className='pl-20 pt-20' level={3}>
        Direction
      </Typography.Title>
      {['row', 'row-reverse', 'col', 'col-reverse'].map((item) => (
        <Fragment key={item}>
          <Typography.Text
            type='secondary'
            className='block pl-20 pt-20 my-title'
          >
            {item}
          </Typography.Text>
          <View className={`example-flex example-direction-${item}`}>
            <Flex
              direction={item as any}
              className={`example-direction_container example-direction-${item}_container`}
            >
              <View className={`example-box example-direction-${item}_box`} />
              <View
                className={`example-box__2 example-direction-${item}_box`}
              />
            </Flex>
          </View>
        </Fragment>
      ))}

      <Typography.Title className='pl-20 pt-20' level={3}>
        Wrap
      </Typography.Title>
      {['wrap', 'wrap-reverse', 'nowrap'].map((item) => (
        <Fragment key={item}>
          <Typography.Text
            type='secondary'
            className='block pl-20 pt-20 my-title'
          >
            {item}
          </Typography.Text>
          <View className={`example-flex example-wrap-${item}`}>
            <Flex
              wrap={item as any}
              className={`example-wrap_container example-wrap-${item}_container`}
            >
              <View className={`example-box example-wrap-${item}_box`} />
              <View className={`example-box__1 example-wrap-${item}_box`} />
              <View className={`example-box__2 example-wrap-${item}_box`} />
              <View className={`example-box__3 example-wrap-${item}_box`} />
            </Flex>
          </View>
        </Fragment>
      ))}
    </View>
  );
};

export default Index;

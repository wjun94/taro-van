import { View } from '@tarojs/components';
import { ViewProps } from '@tarojs/components/types/View';
import { ReactNode } from 'react';

export type P = {
  children?: ReactNode;
  visible?: boolean;
  zIndex?: number;
};

export default ({
  children,
  visible,
  zIndex = 50,
  ...props
}: P & ViewProps) => {
  return (
    <>
      {visible ? (
        <View style={{ zIndex: zIndex }} className='tv-overlay' {...props}>
          <View style={{ zIndex: zIndex + 1 }} className='tv-overlay-overlay' />
          <View style={{ zIndex: zIndex + 2 }} className='tv-overlay-container'>
            {children}
          </View>
        </View>
      ) : (
        <></>
      )}
    </>
  );
};

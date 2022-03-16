import { View } from '@tarojs/components';
import { ReactNode } from 'react';
import Typography from '../../typography';

export type P = {
  title: string;
  key: string;
  children?: ReactNode;
};

const TvTab = ({ title, key, children }) => {
  console.log(key);
  return (
    <View>
      <Typography.Text>{title}</Typography.Text>
      <View>{children}</View>
    </View>
  );
};

export default TvTab;

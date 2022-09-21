import { View } from '@tarojs/components';
import Cascader from '../../components/cascader';
import Typography from '../../components/typography';
import './index.less';

const Index = () => {
  const data = [
    {
      value: '11',
      name: '北京市',
      children: [
        {
          value: '1101',
          name: '市辖区',
          children: [
            {
              value: '110101',
              name: '东城区',
            },
            {
              value: '110102',
              name: '西城区',
            },
          ],
        },
      ],
    },
    {
      value: '12',
      name: '天津市',
      children: [
        {
          value: '1201',
          name: '市辖区',
          children: [
            {
              value: '120101',
              name: '和平区',
            },
          ],
        },
      ],
    },
    {
      value: '13',
      name: '河北省',
      children: [
        {
          value: '1301',
          name: '石家庄市',
          children: [
            {
              value: '130102',
              name: '长安区',
            },
            {
              value: '130104',
              name: '桥西区',
            },
            {
              value: '130105',
              name: '新华区',
            },
          ],
        },
      ],
    },
  ];
  return (
    <View className='p-20'>
      <Typography.Text type='secondary' block className='my-title'>
        基础用法
      </Typography.Text>
      <Cascader options={data} />
    </View>
  );
};

export default Index;

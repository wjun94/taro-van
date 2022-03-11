import { View } from '@tarojs/components';
import { useState } from 'react';
import Uploader, { UploaderFile } from '../../components/uploader';
import Typography from '../../components/typography';
import Icon from '../../components/icon';
import Flex from '../../components/flex';
import './index.less';

const Index = () => {
  const [value1, setValue1] = useState<UploaderFile[]>([]);
  const [value2, setValue2] = useState<UploaderFile[]>([]);
  const [value3, setValue3] = useState<UploaderFile[]>([]);
  const [value4, setValue4] = useState<UploaderFile[]>([]);
  const [value5, setValue5] = useState<UploaderFile[]>([]);
  const [statusValue, setStatusValue] = useState<UploaderFile[]>([
    {
      url: 'https://img.jinse.cn/jinse_1646357741626951478_small.png',
      status: 'failed',
    },
    {
      url: 'https://img.jinse.cn/jinse_1646357741626951478_small.png',
      status: 'uploading',
    },
  ]);
  const [value6, setValue6] = useState<UploaderFile[]>([]);
  const afterRead = (file, idx) => {
    console.log(file);
    setStatusValue((v) => {
      v[idx].status = 'uploading';
      v[idx].message = '上传中...';
      return [...v];
    });
    setTimeout(() => {
      setStatusValue((v) => {
        v[idx].status = 'done';
        return [...v];
      });
    }, idx * 1000);
  };
  return (
    <View className='p-20'>
      <Typography.Text type='secondary' block className='my-title'>
        基本使用
      </Typography.Text>
      <Uploader onChange={setValue1} value={value1} maxCount={1} />

      <Typography.Text type='secondary' block className='my-title'>
        多张上传
      </Typography.Text>
      <Uploader onChange={setValue2} multiple value={value2} />

      <Typography.Text type='secondary' block className='my-title'>
        上传状态
      </Typography.Text>
      <Uploader
        afterRead={afterRead}
        multiple
        onChange={setStatusValue}
        value={statusValue}
      />

      <Typography.Text type='secondary' block className='my-title'>
        限制上传数量
      </Typography.Text>
      <Uploader onChange={setValue3} value={value3} maxCount={1} />

      <Typography.Text type='secondary' block className='my-title'>
        限制上传大小
      </Typography.Text>
      <Uploader
        onChange={setValue4}
        multiple
        value={value4}
        maxSize={56 * 1024}
      />

      <Typography.Text type='secondary' block className='my-title'>
        无删除按钮
      </Typography.Text>
      <Uploader
        onChange={setValue6}
        deletable={false}
        value={value6}
        maxCount={1}
      />

      <Typography.Text type='secondary' block className='my-title'>
        自定义上传样式
      </Typography.Text>
      <Uploader onChange={setValue5} value={value5}>
        <Flex justify='center'>
          <Icon size='xxl' icon='icon-camera' className='tv-uploader__add' />
          <Typography.Text type='secondary' size='sm'>
            上传图片
          </Typography.Text>
        </Flex>
      </Uploader>
    </View>
  );
};

export default Index;

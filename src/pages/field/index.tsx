import { View } from '@tarojs/components';
import Typography from '../../components/typography';
import Button from '../../components/button';
import Field from '../../components/field';

const Index = () => {
  return (
    <View className='p-20'>
      <Typography.Text type='secondary' className='my-title'>
        基础用法
      </Typography.Text>
      <Field label='标题1' value='11122' required placeholder='请输入' />
      <Field label='标题2' maxlength={10} placeholder='请输入' />
      <Field label='标题3' error placeholder='请输入' />
      <Field label='标题3' errorMsg='测试' placeholder='请输入' />
      <Field
        label='标题3'
        rightItem={
          <Button type='primary' size='mini'>
            测试
          </Button>
        }
        placeholder='请输入'
      />
      <Field
        label='标题3'
        intro='测试'
        errorMsg='测试22'
        placeholder='请输入'
      />
    </View>
  );
};

export default Index;

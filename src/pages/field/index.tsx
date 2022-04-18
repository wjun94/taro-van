import { View } from '@tarojs/components';
import Typography from '../../components/typography';
import Button from '../../components/button';
import Field from '../../components/field';
import './index.less';

const Index = () => {
  return (
    <View>
      <Typography.Text type='secondary' className='my-title'>
        基础用法
      </Typography.Text>
      <Field type='digit' placeholder='请输入' />
      <Field
        label='手机号'
        type='number'
        maxlength={11}
        required
        placeholder='请输入'
      />
      <Field label='艺名' disabled value='禁止输入' placeholder='请输入' />
      <Field label='数字' type='number' placeholder='请输入' />
      <Field label='身份证' type='idcard' placeholder='请输入' />
      <Field label='密码' type='password' placeholder='请输入' />
      <Field
        label='验证码'
        rightItem={
          <Button type='primary' size='mini'>
            发送
          </Button>
        }
        placeholder='请输入'
      />
      <Field label='文本' intro='表单中的输入框组件。' placeholder='请输入' />
      <Field label='账号' error placeholder='请输入账号' />
      <Field label='手机号' errorMsg='手机号格式错误' placeholder='请输入' />
      <Field label='对齐' inputAlign='right' placeholder='请输入' />
      <Field label='留言' placeholder='请输入留言' type='textarea' />
    </View>
  );
};

export default Index;

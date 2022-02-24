import { useRef } from 'react';
import Field from '../../components/field';
import Form from '../../components/form';
import Button from '../../components/button';
import './index.less';

const Index = () => {
  const formRef = useRef<any>();
  const onFn = (values) => {
    console.log(values);
  };
  const onTest = () => {
    formRef.current.setFieldsValue({
      phone: 12345,
      email: '10086@xx.com',
    });
  };
  const onReset = () => {
    formRef.current.resetFields();
  };
  return (
    <>
      <Form onFinish={onFn} className='p-20'>
        <Form.Item rules={[{ required: true, message: '用户名不能为空' }]}>
          <Field placeholder='请输入用户名' label='用户名' name='name' />
        </Form.Item>
        <Form.Item rules={[{ required: true, message: '密码不能为空' }]}>
          <Field
            placeholder='请输入密码'
            label='密码'
            type='password'
            name='password'
          />
        </Form.Item>
        <Form.Item>
          <Button block type='primary' className='mt-20' formType='submit'>
            提交
          </Button>
        </Form.Item>
      </Form>

      <Form onFinish={onFn} className='p-20'>
        <Form.Item rules={[{ pattern: /\d{6}/, message: '请输入6位数字' }]}>
          <Field placeholder='请输入正则校验' label='正则校验' name='reg' />
        </Form.Item>
        <Form.Item>
          <Button block type='primary' className='mt-20' formType='submit'>
            提交
          </Button>
        </Form.Item>
      </Form>

      <Form
        ref={formRef}
        onFinish={onFn}
        initialValues={{ phone: 10086, email: '222@xx.com' }}
        className='p-20'
      >
        <Form.Item rules={[{ required: true, message: '手机号不能为空' }]}>
          <Field
            placeholder='请输入'
            type='number'
            label='手机号'
            name='phone'
          />
        </Form.Item>
        <Form.Item>
          <Field placeholder='请输入' label='邮箱' name='email' />
        </Form.Item>
        <Form.Item className='example-form-footer'>
          <Button onClick={onTest}>设置值</Button>
          <Button onClick={onReset}>重置</Button>
          <Button type='primary' className='mt-20' formType='submit'>
            提交
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Index;

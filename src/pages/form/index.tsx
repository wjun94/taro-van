import { useRef } from 'react';
import Field from '../../components/field';
import Form from '../../components/form';
import Button from '../../components/button';
import Radio from '../../components/radio';
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
        <Form.Item
          label='用户名'
          name='name'
          rules={[{ required: true, message: '用户名不能为空' }]}
        >
          <Field placeholder='请输入用户名' />
        </Form.Item>
        <Form.Item
          label='密码'
          name='password'
          rules={[{ required: true, message: '密码不能为空' }]}
        >
          <Field placeholder='请输入密码' type='password' />
        </Form.Item>
        <Form.Item>
          <Button block type='primary' className='mt-20' formType='submit'>
            提交
          </Button>
        </Form.Item>
      </Form>

      <Form onFinish={onFn} className='p-20'>
        <Form.Item
          label='正则校验'
          name='reg'
          rules={[{ pattern: /\d{6}/, message: '请输入6位数字' }]}
        >
          <Field placeholder='请输入正则校验' />
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
        <Form.Item
          label='手机号'
          name='phone'
          rules={[{ required: true, message: '手机号不能为空' }]}
        >
          <Field placeholder='请输入' type='number' />
        </Form.Item>
        <Form.Item name='email' label='邮箱'>
          <Field placeholder='请输入' />
        </Form.Item>
        <Form.Item className='example-form-footer'>
          <Button onClick={onTest}>设置值</Button>
          <Button onClick={onReset}>重置</Button>
          <Button type='primary' className='mt-20' formType='submit'>
            提交
          </Button>
        </Form.Item>
      </Form>

      <Form onFinish={onFn} initialValues={{ sex: '0' }} className='p-20'>
        <Form.Item label='姓名' name='name'>
          <Field placeholder='请输入姓名' />
        </Form.Item>
        <Form.Item label='性别' name='sex'>
          <Radio.Group>
            <Radio value='0'>男11</Radio>
            <Radio value='1'>女22</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item>
          <Button block type='primary' className='mt-20' formType='submit'>
            提交
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Index;
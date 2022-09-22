import { useRef } from 'react';
import Field from '../../components/field';
import Typography from '../../components/typography';
import Form from '../../components/form';
import Button from '../../components/button';
import Radio from '../../components/radio';
import Uploader from '../../components/uploader';
import Switch from '../../components/switch';
import Cascader from '../../components/cascader';
import './index.less';

const Index = () => {
  const formRef = useRef<any>();
  const data = [
    {
      value: '11',
      name: '北京市',
      children: [
        {
          value: '1101',
          name: '市辖区1',
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
          name: '市辖区2',
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
  const onFn = (values) => {
    console.log(values);
  };
  const onSet = () => {
    formRef.current.setFieldsValue({
      phone: 12345,
      email: '10086@xx.com',
      area: ['11', '1101', '110101'],
    });
  };
  const onReset = () => {
    formRef.current.resetFields();
  };

  return (
    <>
      <Typography.Text type='secondary' className='my-title'>
        基础用法
      </Typography.Text>
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
        <Form.Item
          label='备注'
          name='mark'
          align='start'
          rules={[{ required: true, message: '备注不能为空' }]}
          noBorder
        >
          <Field placeholder='请输入备注' type='textarea' />
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

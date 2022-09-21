import { useRef, useState } from 'react';
import Field from '../../components/field';
import Typography from '../../components/typography';
import Form from '../../components/form';
import Button from '../../components/button';
import Radio from '../../components/radio';
import Uploader from '../../components/uploader';
import Switch from '../../components/switch';
import Popup from '../../components/popup';
import Cascader from '../../components/cascader';
import './index.less';

const Index = () => {
  const formRef = useRef<any>();
  const [visible, setVisible] = useState(false);
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
  const onFn = (values) => {
    console.log(values);
  };
  const onSet = () => {
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
        <Form.Item label='选择地区' onClick={() => setVisible(true)}>
          <Field placeholder='请选择地址' />
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
      <Popup visible={visible} onClose={() => setVisible(false)}>
        <Cascader
          onFinish={() => setVisible(false)}
          onClose={() => setVisible(false)}
          options={data}
        />
      </Popup>

      <Typography.Text type='secondary' className='my-title'>
        校验规则
      </Typography.Text>
      <Form onFinish={onFn} className='p-20'>
        <Form.Item
          label='正则校验'
          name='reg'
          noBorder
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

      <Typography.Text type='secondary' className='my-title'>
        设置重置值
      </Typography.Text>
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
        <Form.Item noBorder name='email' label='邮箱'>
          <Field placeholder='请输入' />
        </Form.Item>
        <Form.Item className='example-form-footer'>
          <Button onClick={onSet}>设置值</Button>
          <Button onClick={onReset}>重置</Button>
          <Button type='primary' className='mt-20' formType='submit'>
            提交
          </Button>
        </Form.Item>
      </Form>

      <Typography.Text type='secondary' className='my-title'>
        图片上传
      </Typography.Text>
      <Form
        onFinish={onFn}
        initialValues={{ sex: '0', isDefault: '1' }}
        className='p-20'
      >
        <Form.Item label='姓名' name='name'>
          <Field placeholder='请输入姓名' />
        </Form.Item>
        <Form.Item label='性别' name='sex'>
          <Radio.Group>
            <Radio value='0'>男11</Radio>
            <Radio value='1'>女22</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label='上传图片'
          align='start'
          rules={[{ required: true, message: '图片不能为空' }]}
          name='imgs'
        >
          <Uploader />
        </Form.Item>
        <Form.Item noBorder label='默认设置' name='isDefault'>
          <Switch />
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

import { useRef } from 'react';
import Field from '../../components/field';
import Form from '../../components/form';
import Button from '../../components/button';

const Index = () => {
  const formRef = useRef<any>();
  const onFn = (values) => {
    console.log(values);
  };
  const onTest = () => {
    formRef.current.setFieldsValue({ age: 333 });
  };
  const onReset = () => {
    formRef.current.resetFields();
  };
  return (
    <>
      <Form
        ref={formRef}
        onFinish={onFn}
        initialValues={{ name: 1 }}
        className='p-20'
      >
        <Form.Item rules={[{ required: true, message: '真得烦' }]}>
          <Field label='测试1' name='age' />
        </Form.Item>
        <Form.Item>
          <Field label='测试2' name='name' />
        </Form.Item>
        <Button formType='submit'>提交</Button>
      </Form>
      <Button onClick={onTest}>测试</Button>
      <Button onClick={onReset}>测试</Button>
    </>
  );
};

export default Index;

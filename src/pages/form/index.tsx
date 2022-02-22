import Field from '../../components/field';
import TvForm from '../../components/form';
import Button from '../../components/button';

const Index = () => {
  const onFn = (values) => {
    console.log(values.detail.value);
  };
  return (
    <TvForm onSubmit={onFn} className='p-20'>
      <Field label='测试1' name='age' />
      <Field label='测试2' name='name' />
      <Button formType='submit'>提交</Button>
    </TvForm>
  );
};

export default Index;

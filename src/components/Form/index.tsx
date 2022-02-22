import { ReactNode } from 'react';
import { Form } from '@tarojs/components';
import { FormProps } from '@tarojs/components/types/Form';
import classNames from 'classnames';

export type P = {
  children?: ReactNode;
};

const TvForm = ({ children, className, ...props }: P & FormProps) => {
  const prefixCls = 'tv-form';
  const classes = classNames(prefixCls, {}, className);
  return (
    <Form className={classes} {...props}>
      {children}
    </Form>
  );
};

export default TvForm;

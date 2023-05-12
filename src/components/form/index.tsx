import {
  ReactNode,
  createContext,
  forwardRef,
  useImperativeHandle,
  cloneElement,
  useState,
  Children,
  ReactElement,
  Fragment,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
} from 'react';
import { Form as TaroForm } from '@tarojs/components';
import { FormProps as TaroFormProps } from '@tarojs/components/types/Form';
import clsx from 'classnames';
import Item, { Rule, P } from './item';

export type FormProps = {
  children?: ReactNode;
  /** 初始默认值 */
  initialValues?: { [key: string]: string | number };
  /** 提交表单且数据验证成功后回调事件 */
  onFinish?: (values?: { [key: string]: any }) => void;
};

export type FormRef = {
  /** 清空表单 */
  resetFields: () => void;
  /** 获取表单值 */
  getFieldsValue: () => { [key: string]: any };
  /** 动态改变表单值 */
  setFieldsValue: (values: { [key: string]: any }) => void;
};

/** Form组建类型 */
export type ForwardComponent = ForwardRefExoticComponent<
  PropsWithoutRef<FormProps & TaroFormProps> & RefAttributes<FormRef>
> & { Item: ForwardRefExoticComponent<PropsWithoutRef<P>> };

export const formContext = createContext({});

const Form = forwardRef<FormRef, FormProps & TaroFormProps>(
  ({ children, className, initialValues = {}, onFinish, ...props }, ref) => {
    const prefixCls = 'tv-form';
    // 保存name rules
    const validate: { [key: string]: Rule[] } = {};
    const classes = clsx(prefixCls, {}, className);
    // form表单值
    const [formValues, setFormValues] = useState(initialValues);
    // 保存错误数据
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    /**
     * 表单校验
     * @params values 表单数据
     * @params name 校验指定字段
     */
    const validateFields = (
      values = formValues,
      name: string = '',
    ): boolean => {
      let result = {};
      let isBreak = false; // 是否跳出循环
      if (JSON.stringify(validate) !== '{}') {
        // 错误校验
        for (let i in validate) {
          validate[i].forEach((item: Rule) => {
            if (
              (name && name !== i && JSON.stringify(errors) === '{}') ||
              isBreak
            )
              return;
            if (name && item.required && values && name === i) {
              result = errors;
              if (['', '[]', 'undefined', 'null'].includes(String(values[i]))) {
                console.warn(item.message || `${i}不能为空`);
                result[i] = item.message || `${i}不能为空`;
              } else {
                delete errors[i];
              }
              isBreak = true;
            } else if (
              item.required &&
              ((name && name === i) || !name) &&
              values &&
              ['', '[]', 'undefined', 'null'].includes(String(values[i]))
            ) {
              // 是否为空校验
              console.warn(item.message || `${i}不能为空`);
              result[i] = item.message || `${i}不能为空`;
            } else if (
              item.pattern &&
              values &&
              values[i] &&
              !item.pattern.test(String(values[i]))
            ) {
              // 正则校验
              console.warn(item.message || `请重新输入`);
              result[i] = item.message || `请重新输入`;
            }
          });
        }
        setErrors({ ...result });
      }
      return JSON.stringify(result) === '{}';
    };

    useImperativeHandle(ref, () => ({
      // 设置值
      setFieldsValue: (values) => {
        setErrors({});
        if (Object.prototype.toString.call(values) === '[object Object]') {
          setFormValues((v) => ({ ...v, ...values }));
        }
      },
      // 清空表单值
      resetFields: () => {
        setErrors({});
        setFormValues({} as any);
      },
      // 获取表单值
      getFieldsValue: () => {
        return formValues;
      },
    }));
    // 提交表单
    const onSubmit = (values) => {
      const { value } = values.detail;
      const result = { ...formValues, ...value };
      setFormValues({ ...result });
      // 表单校验
      if (validateFields(result)) {
        // 表单校验通过
        onFinish && onFinish(result);
      }
    };

    // 子节点
    const childElement = (child: ReactElement) => {
      // <Form.Item name="name"> ... </Form.Item>
      if (!child) {
        return;
      }
      if (child.type === Fragment) {
        return Children.map(child.props.children, (c: ReactElement) => {
          return childElement(c);
        });
      }
      const { name } = child.props || {};
      const config = {
        onChange: (values) => {
          if (typeof values !== 'object') {
            // field和radio onChange带detail不执行以下方法
            // Uploader执行以下代码
            setFormValues((v: any) => {
              if (v) {
                v[name] = values;
              }
              validateFields(v, name);
              return { ...v };
            });
          }
        },
      };
     
      if (name) {
        let obj = {};
        if (child.props.rules) {
          validate[name] = child.props.rules;
          obj = {
            name,
            error: !!errors[name],
            errorMsg: errors[name],
          };
        }
        return cloneElement(child, {
          ...config,
          ...obj,
        });
      }
      return cloneElement(child, {
        ...config,
      });
    };
    return (
      <formContext.Provider value={formValues}>
        <TaroForm className={classes} onSubmit={onSubmit} {...props}>
          {Children.map(children, childElement)}
        </TaroForm>
      </formContext.Provider>
    );
  },
);

(Form as ForwardComponent).Item = Item;

export default Form as ForwardComponent;

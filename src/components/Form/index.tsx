import {
  ReactNode,
  createContext,
  forwardRef,
  useImperativeHandle,
  cloneElement,
  Ref,
  useState,
  Children,
} from 'react';
import { Form } from '@tarojs/components';
import { FormProps } from '@tarojs/components/types/Form';
import classNames from 'classnames';
import Item from './item';

export type P = {
  children?: ReactNode;
  initialValues?: object;
  onFinish?: (values?: any) => void;
};

export const formContext = createContext({});

const TvForm = forwardRef(
  (
    { children, className, initialValues, onFinish, ...props }: P & FormProps,
    ref: Ref<any>,
  ) => {
    const prefixCls = 'tv-form';
    // 保存name rules
    const validate = {};
    const classes = classNames(prefixCls, {}, className);
    // form表单值
    const [formValues, setFormValues] = useState(null);
    // 保存错误数据
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    /**
     * 表单校验
     * @values 表单数据
     */
    const validateFields = (values = formValues): boolean => {
      let result = {};
      if (JSON.stringify(validate) !== '{}') {
        // 错误校验
        for (let i in validate) {
          validate[i].forEach((item) => {
            if (item.required && values && !values[i]) {
              console.error(item.message || `请输入${i}`);
              result[i] = item.message || `请输入`;
            }
          });
        }
        setErrors({ ...result });
      }
      return JSON.stringify(validate) === '{}';
    };

    useImperativeHandle(ref, () => ({
      // 设置值
      setFieldsValue: (values) => {
        if (Object.prototype.toString.call(values) === '[object Object]') {
          setFormValues(values);
        }
      },
      // 清空表单值
      resetFields: () => {
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
      setFormValues(value);
      // 表单校验
      if (validateFields(value)) {
        // 表单校验通过
        onFinish && onFinish(value);
      }
    };
    return (
      <formContext.Provider value={formValues || (initialValues as {})}>
        <Form className={classes} onSubmit={onSubmit} {...props}>
          {Children.map(children, (child: any) => {
            if (child.props.rules && child.props.children.props.name) {
              const { name } = child.props.children.props;
              validate[name] = child.props.rules;
              return cloneElement(child, {
                onInput: (e) => {
                  if (e.type === 'input') {
                    setFormValues((v: any) => {
                      if (v) {
                        v[child.props.children.props.name] = e.detail.value;
                        validateFields(v);
                      }
                      return { ...v };
                    });
                  }
                },
                error: !!errors[name],
                errorMsg: errors[name],
              });
            }
            return cloneElement(child, {});
          })}
        </Form>
      </formContext.Provider>
    );
  },
);

(TvForm as any).Item = Item;

export default TvForm as any;

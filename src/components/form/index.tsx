import {
  ReactNode,
  createContext,
  forwardRef,
  useImperativeHandle,
  cloneElement,
  Ref,
  useState,
  Children,
  ReactElement,
} from 'react';
import { Form } from '@tarojs/components';
import { FormProps } from '@tarojs/components/types/Form';
import classNames from 'classnames';
import Item, { Rule } from './item';

export type P = {
  children?: ReactNode;
  initialValues?: { [key: string]: string | number };
  onFinish?: (values?: any) => void;
};

export const formContext = createContext({});

const TvForm = forwardRef(
  (
    {
      children,
      className,
      initialValues = {},
      onFinish,
      ...props
    }: P & FormProps,
    ref: Ref<any>,
  ) => {
    const prefixCls = 'tv-form';
    // 保存name rules
    const validate: { [key: string]: Rule[] } = {};
    const classes = classNames(prefixCls, {}, className);
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
      if (JSON.stringify(validate) !== '{}') {
        // 错误校验
        for (let i in validate) {
          validate[i].forEach((item: Rule) => {
            if (name && name !== i && JSON.stringify(errors) === '{}') return;
            if (
              item.required &&
              values &&
              ['', '[]'].includes(String(values[i]))
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
          setFormValues(values);
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
    return (
      <formContext.Provider value={formValues}>
        <Form className={classes} onSubmit={onSubmit} {...props}>
          {Children.map(children, (child: ReactElement) => {
            // <Form.Item name="name"> ... </Form.Item>
            const { name } = child.props;
            const config = {
              onChange: (values) => {
                if (!values.detail) {
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
            if (child.props.rules && name) {
              validate[name] = child.props.rules;
              return cloneElement(child, {
                ...config,
                onInput: (e) => {
                  if (e.type === 'input') {
                    setFormValues((v: any) => {
                      if (v) {
                        v[name] = e.detail.value;
                        validateFields(v, name);
                      }
                      return { ...v };
                    });
                  }
                },
                name,
                error: !!errors[name],
                errorMsg: errors[name],
              });
            }
            return cloneElement(child, {
              ...config,
            });
          })}
        </Form>
      </formContext.Provider>
    );
  },
);

(TvForm as any).Item = Item;

export default TvForm as any;

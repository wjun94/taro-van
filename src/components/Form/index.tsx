import {
  ReactNode,
  createContext,
  forwardRef,
  useImperativeHandle,
  cloneElement,
  Ref,
  useState,
  Children,
  useRef,
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
    const classes = classNames(prefixCls, {}, className);
    const [target, setTarget] = useState(null);
    let itemRef = useRef<any>({});
    console.log(itemRef);

    // 触发表单校验
    const validateFields = () => {};

    useImperativeHandle(ref, () => ({
      // 设置值
      setFieldsValue: (values) => {
        if (Object.prototype.toString.call(values) === '[object Object]') {
          setTarget(values);
        }
      },
      // 清空表单值
      resetFields: () => {
        setTarget({} as any);
      },
      // 获取表单值
      getFieldsValue: () => {
        return target;
      },
    }));
    return (
      <formContext.Provider value={target || (initialValues as {})}>
        <Form
          className={classes}
          onSubmit={(values) => {
            // console.log(itemRef.current.validateFields())
            console.log(itemRef);
            onFinish && onFinish(values.detail.value);
          }}
          {...props}
        >
          {Children.map(children, (child: any) => {
            return cloneElement(child, {
              ref: (result) => Object.assign(itemRef.current, result),
            });
          })}
        </Form>
      </formContext.Provider>
    );
  },
);

(TvForm as any).Item = Item;

export default TvForm as any;

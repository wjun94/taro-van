import {
  View,
  PickerViewColumn,
  PickerView,
  PickerViewProps,
} from '@tarojs/components';
import classNames from 'classnames';
import {
  useEffect,
  useState,
  Key,
  cloneElement,
  ReactElement,
  useCallback,
} from 'react';
import Typography from '../typography';
import Popup from '../popup';
import Flex from '../flex';

export type Item =
  | {
      code: string;
      name: string;
      children: Item[];
    }
  | any;

export type P = {
  /** 渲染函数 */
  children?: (text: string) => ReactElement;
  /** 初始值 */
  value?: Key[];
  /** 数据化配置选项内容 */
  options: Item[];
  /** 是否弹窗显示 */
  popup?: boolean;
  /** 自定义字段 */
  fieldNames?: {
    text: string;
    value: string;
    children: string;
  };
  /** 标题类名 */
  headClassName?: string;
  /** 值改变
   * @params values
   * @params selectedRows
   */
  onChange?: (values: Key[], selectedRows: Item[]) => void;
  /** 点击确定
   * @params values
   * @params selectedRows
   */
  onFinish?: (values: Key[], selectedRows: Item[]) => void;
  /** 点击取消 */
  onCancel?: () => void;
};

const Cascader = ({
  options = [],
  headClassName,
  onCancel,
  fieldNames = {
    text: 'name',
    value: 'value',
    children: 'children',
  },
  value = [],
  onChange,
  children,
  onFinish,
  popup,
  ...props
}: P & Omit<PickerViewProps, 'value' | 'onChange' | 'children'>) => {
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState('');
  const [area, setArea] = useState([0, 0, 0] as Key[]);
  const prefixCls = 'tv-cascader';
  const headClasses = classNames(`${prefixCls}-head`, headClassName);

  useEffect(() => {
    let count = -1;
    const result: Array<{ index: number; node: Item }> = [];
    const fd = (data) => {
      count += 1;
      return data.find((item, i) => {
        const isKeep = item[fieldNames.value] === value[count];
        if (isKeep) {
          result[count] = {
            index: i,
            node: item,
          };
          if (item && item[fieldNames.children]) {
            fd(item.children);
          }
        }
        return isKeep;
      });
    };
    fd(options);
    setArea([...result.map((item) => item.index)]);
    setTimeout(() => {
      // 需要二次更新
      setArea([...result.map((item) => item.index)]);
    }, 10);
    // 设置初始值
    if (!visible) {
      setText([...result.map((item) => item.node[fieldNames.text])].join());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(value)]);

  // 市数据
  let citys: Item[] = [];
  // 区数据
  let district: Item[] = [];
  if (options && options.length) {
    citys = options[area[0] || 0][fieldNames.children];
    if (citys && citys.length) {
      district =
        options[area[0] || 0][fieldNames.children][area[1] || 0][
          fieldNames.children
        ];
    }
  }

  const onPickerChange = (values) => {
    const target = values.detail.value;
    const [oldProv, oldCity] = target;
    // 输出结果
    let result: Item[] = [];
    if (area[0] !== target[0]) {
      // 选择省
      result = [oldProv, 0, 0];
    } else if (area[1] !== oldCity) {
      // 选择市
      result = [oldProv, oldCity, 0];
    } else {
      // 选择区
      result = target;
    }
    setArea([...result]);
    if (onChange) {
      const [prov = 0, city = 0, dt = 0] = result;
      const rows = [options[prov], citys[city], district[dt]];
      onChange(
        rows.map((item) => item[fieldNames.value]),
        rows,
      );
    }
  };
  // 点击确定
  const onSubmit = () => {
    const [prov = 0, city = 0, dt = 0] = area;
    const rows = [options[prov], citys[city], district[dt]];
    if (onFinish) {
      onFinish(
        rows.map((item) => item[fieldNames.value]),
        rows,
      );
    }
    if (popup) {
      onChange &&
        onChange(
          rows.map((item) => item[fieldNames.value]),
          rows,
        );
      setText(rows.map((item) => item[fieldNames.text]).join());
      setVisible(false);
    }
  };

  // 联级选择
  const CascaderRender = () => {
    return (
      <>
        {options && options.length ? (
          <View {...props}>
            <Flex justify='between' className={headClasses}>
              <Typography.Text
                type='secondary'
                onClick={() => {
                  if (popup) {
                    setVisible(false);
                  }
                  onCancel && onCancel();
                }}
              >
                取消
              </Typography.Text>
              <Typography.Text type='primary' onClick={() => onSubmit()}>
                确定
              </Typography.Text>
            </Flex>
            <PickerView
              indicatorStyle='height: 50px;'
              style='width: 100%; height: 300px;'
              value={area as any}
              onChange={onPickerChange}
            >
              <PickerViewColumn>
                {options.map((item) => {
                  return (
                    <Flex
                      align='center'
                      justify='center'
                      key={item[fieldNames.value]}
                    >
                      {item[fieldNames.text]}
                    </Flex>
                  );
                })}
              </PickerViewColumn>
              <PickerViewColumn>
                {citys &&
                  citys.map((item) => {
                    return (
                      <Flex
                        align='center'
                        justify='center'
                        key={item[fieldNames.value]}
                      >
                        {item[fieldNames.text]}
                      </Flex>
                    );
                  })}
              </PickerViewColumn>
              <PickerViewColumn>
                {district &&
                  district.map((item) => {
                    return (
                      <Flex
                        align='center'
                        justify='center'
                        key={item[fieldNames.value]}
                      >
                        {item[fieldNames.text]}
                      </Flex>
                    );
                  })}
              </PickerViewColumn>
            </PickerView>
          </View>
        ) : (
          <></>
        )}
      </>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  };

  const CascaderRenderH5 = useCallback(CascaderRender, [options, citys]);

  return (
    <>
      {popup ? (
        <>
          {children ? (
            cloneElement(children(text), {
              onClick: () => setVisible(true),
            })
          ) : (
            <Typography.Text onClick={() => setVisible(true)}>
              {text || '请选择地址'}
            </Typography.Text>
          )}

          <Popup visible={visible} onClose={() => setVisible(false)}>
            {process.env.TARO_ENV === 'h5' ? (
              <CascaderRenderH5 />
            ) : (
              <CascaderRender />
            )}
          </Popup>
        </>
      ) : (
        <>
          {process.env.TARO_ENV === 'h5' ? (
            <CascaderRenderH5 />
          ) : (
            <CascaderRender />
          )}
        </>
      )}
    </>
  );
};

export default Cascader;

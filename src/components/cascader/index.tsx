import {
  View,
  PickerViewColumn,
  PickerView,
  PickerViewProps,
} from '@tarojs/components';
import classNames from 'classnames';
import { useEffect, useState, Key } from 'react';
import Typography from '../typography';
import Flex from '../flex';

export type Item =
  | {
      code: string;
      name: string;
      children: Item[];
    }
  | any;

export type P = {
  /** 数据化配置选项内容 */
  options: Item[];
  // 自定义字段
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
  /** 值改变
   * @params values
   * @params selectedRows
   */
  onFinish?: (values: Key[], selectedRows: Item[]) => void;
  /** 点击取消 */
  onClose?: () => void;
  /** 初始值 */
  value?: Key[];
};

const Cascader = ({
  options = [],
  headClassName,
  onClose,
  fieldNames = {
    text: 'name',
    value: 'value',
    children: 'children',
  },
  value = [],
  onChange,
  onFinish,
  ...props
}: P & Omit<PickerViewProps, 'value' | 'onChange'>) => {
  const [area, setArea] = useState([] as Key[]);
  const prefixCls = 'tv-cascader';
  const headClasses = classNames(`${prefixCls}-head`, headClassName);

  useEffect(() => {
    let count = -1;
    const result: Array<string | number> = [];
    const fd = (data) => {
      count += 1;
      return data.find((item, i) => {
        const isKeep = item[fieldNames.value] === value[count];
        if (isKeep) {
          result[count] = i;
          if (item && item[fieldNames.children]) {
            fd(item.children);
          }
        }
        return isKeep;
      });
    };
    fd(options);
    setArea([...result]);
    setTimeout(() => {
      // 需要二次更新
      setArea([...result]);
    }, 10);
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
    setArea(result);
    if (onChange) {
      const [prov, city, dt] = result;
      const rows = [options[prov], citys[city], district[dt]];
      onChange(
        rows.map((item) => item[fieldNames.value]),
        rows,
      );
    }
  };
  // 点击确定
  const onSubmit = () => {
    if (onFinish) {
      const [prov, city, dt] = area;
      const rows = [options[prov], citys[city], district[dt]];
      onFinish(
        rows.map((item) => item[fieldNames.value]),
        rows,
      );
    }
  };

  return (
    <>
      {options && options.length ? (
        <View {...props}>
          <Flex justify='between' className={headClasses}>
            <Typography.Text
              type='secondary'
              onClick={() => onClose && onClose()}
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
};

export default Cascader;

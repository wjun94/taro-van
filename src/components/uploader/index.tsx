import { chooseImage, previewImage, showToast } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import clsx from 'classnames';
import { ReactElement, useMemo, cloneElement, Fragment } from 'react';
import Icon from '../icon';
import Typography from '../typography';
import Loading from '../loading';
import Flex from '../flex';

export type UploaderFile = {
  name?: string;
  status?: 'done' | 'uploading' | 'failed';
  message?: string;
  url: string;
};

export type UploadProps = {
  children?: ReactElement;
  /** 默认值 */
  value?: UploaderFile[] | string[];
  /** 最大上传数 */
  maxCount?: number;
  /** 是否有删除按钮 */
  deletable?: boolean;
  /** 显示的图片链接(前缀) */
  beforeUrl?: string;
  /** 是否支持预览 */
  preview?: boolean;
  /** 自定义上传列表项 */
  itemRender?: (node: UploaderFile, index: number) => ReactElement;
  /** 上传列表的内建样式 */
  listType?: 'text' | 'picture-card';
  /** 限制上传大小 */
  maxSize?: number;
  /** 是否允许上传多张 */
  multiple?: boolean;
  /** 是否禁用文件上传 */
  disabled?: boolean;
  theme?: 'default' | 'normal';
  onChange?: (files: string[] | string | any) => void;
  /** 删除图片事件 */
  onDelete?: (file: string, index) => void;
  /** 文件大小超过限制时触发 */
  onOversize?: () => void;
  /** 文件读取完成后的回调函数 */
  afterRead?: (file: any, index: number) => void;
  className?: string;
};

const Uploader = ({
  value = [],
  multiple,
  className,
  beforeUrl = '',
  deletable = true,
  listType = 'text',
  itemRender,
  maxCount,
  disabled,
  theme = 'normal',
  onChange,
  maxSize,
  onDelete,
  onOversize,
  afterRead,
  children,
  preview = true,
}: UploadProps) => {
  const prefixCls = 'tv-uploader';
  const list = useMemo(() => {
    return value && typeof value[0] !== 'object'
      ? (typeof value === 'string' ? [value] : [...value]).map((item) => ({
          url: item,
        }))
      : [...value];
  }, [value]);
  const classes = clsx(
    prefixCls,
    {
      [`${prefixCls}__${theme}`]: theme,
    },
    className,
  );
  /** 上传图片 */
  const onUpload = () => {
    if (disabled) return;
    chooseImage({
      count: multiple ? 9 : 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: async (res) => {
        const target = [
          ...(listType === 'text' ? list : []),
          ...res.tempFiles.map((item) => {
            if (maxSize && item.size > maxSize) {
              onOversize
                ? onOversize()
                : showToast({
                    title: `文件大小不能超过 ${maxSize / 1024}kb`,
                    icon: 'none',
                  });
              return undefined as any;
            }
            return {
              name: item.originalFileObj?.name,
              url: item.path,
            } as UploaderFile;
          }),
        ];
        const fileList = [...target]
          .filter((item) => item)
          .map((item) => item.url);
        onChange && (await onChange(maxCount === 1 ? fileList[0] : fileList));
        for (let i = 0; i < res.tempFiles.length; i++) {
          if (afterRead) {
            await afterRead(res.tempFiles[i], [...list].length + i);
          }
        }
      },
    });
  };
  /**
   * 删除图片
   * @params idx 索引
   */
  const onRemove = (idx: number) => {
    const target = [...list];
    target.splice(idx, 1);
    const filesList = [...target].map((item: UploaderFile) => item.url);
    onChange && onChange(maxCount === 1 ? filesList[0] : filesList);
    onDelete && onDelete(([...list][idx] as UploaderFile).url, idx);
  };
  return (
    <View className={classes}>
      <View className='tv-uploader__wrapper'>
        {list.map((item, i: number) =>
          itemRender ? (
            <Fragment key={item.url + i}>
              {cloneElement(itemRender(item, i), {
                onClick: (event) => {
                  if ((children as React.ReactElement).props.onClick) {
                    // 设置显示内容
                    (children as React.ReactElement).props.onClick(event);
                  }
                  onUpload();
                },
              })}
            </Fragment>
          ) : (
            <View key={item.url + i} className='tv-uploader__preview'>
              <Image
                className='tv-uploader__img'
                onClick={() =>
                  preview &&
                  previewImage({
                    current: beforeUrl + item.url,
                    urls: list.map((file) => beforeUrl + file.url),
                  })
                }
                mode='aspectFill'
                src={beforeUrl + item.url}
              />
              {item.status && item.status !== 'done' && (
                <Flex
                  justify='center'
                  align='center'
                  className='tv-uploader__mask'
                >
                  <Flex align='center' direction='column'>
                    {item.status === 'uploading' ? (
                      <Loading
                        color='#fff'
                        className='tv-uploader__mask__icon'
                      />
                    ) : (
                      <Icon
                        size='xl'
                        icon='icon-close'
                        className='tv-uploader__mask__icon'
                      />
                    )}
                    <Typography.Text type='white' size='sm'>
                      {item.message || item.status === 'uploading'
                        ? '正在上传'
                        : '上传失败'}
                    </Typography.Text>
                  </Flex>
                </Flex>
              )}
              {deletable && item.status !== 'uploading' && (
                <View className='tv-uploader-close'>
                  <Icon
                    onClick={() => onRemove(i)}
                    size='lg'
                    className='tv-uploader-close__icon'
                    icon='icon-cross'
                  />
                </View>
              )}
            </View>
          ),
        )}
        {((maxCount && list.length < maxCount) || !maxCount) &&
          (listType === 'text' ? (
            <View onClick={onUpload} className='tv-uploader__upload'>
              {children || (
                <Icon
                  size='xxl'
                  icon='icon-plus'
                  className='tv-uploader__add'
                />
              )}
            </View>
          ) : (
            cloneElement(children as ReactElement, {
              onClick: (event) => {
                if ((children as React.ReactElement).props.onClick) {
                  // 设置显示内容
                  (children as React.ReactElement).props.onClick(event);
                }
                onUpload();
              },
            })
          ))}
      </View>
    </View>
  );
};

export default Uploader;

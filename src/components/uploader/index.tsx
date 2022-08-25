import { chooseImage, previewImage, showToast } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import classNames from 'classnames';
import { ReactNode, useMemo } from 'react';
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

export type P = {
  children?: ReactNode;
  value?: UploaderFile[]; // 默认值
  maxCount?: number; // 最大上传数
  deletable?: boolean; // 是否有删除按钮
  preview?: boolean; // 是否支持预览
  maxSize?: number; // 限制上传大小
  multiple?: boolean; // 是否允许上传多张
  disabled?: boolean; // 是否禁用文件上传
  onChange?: (files: UploaderFile[]) => void;
  onDelete?: (file: UploaderFile, index) => void; // 删除图片事件
  onOversize?: () => void; // 文件大小超过限制时触发
  afterRead?: (file: any, index: number) => void; // 文件读取完成后的回调函数
  className?: string;
};

const Uploader = ({
  value = [],
  multiple,
  className,
  deletable = true,
  maxCount,
  disabled,
  onChange,
  maxSize,
  onDelete,
  onOversize,
  afterRead,
  children,
  preview = true,
}: P) => {
  const prefixCls = 'tv-uploader';
  const list = useMemo(() => {
    return [...value];
  }, [value]);
  const classes = classNames(prefixCls, {}, className);
  /** 上传图片 */
  const onUpload = () => {
    if (disabled) return;
    chooseImage({
      count: multiple ? 9 : 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: async (res) => {
        const target = [
          ...list,
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
        onChange && (await onChange([...target].filter((item) => item)));
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
    onChange && onChange([...target]);
    onDelete && onDelete([...list][idx], idx);
  };
  return (
    <View className={classes}>
      <View className='tv-uploader__wrapper'>
        {list.map((item, i: number) => (
          <View key={item.url + i} className='tv-uploader__preview'>
            <Image
              className='tv-uploader__img'
              onClick={() =>
                preview &&
                previewImage({
                  current: item.url,
                  urls: list.map((file) => file.url),
                })
              }
              mode='aspectFill'
              src={item.url}
            />
            {item.status && item.status !== 'done' && (
              <Flex
                justify='center'
                align='center'
                className='tv-uploader__mask'
              >
                <Flex align='center' direction='column'>
                  {item.status === 'uploading' ? (
                    <Loading className='tv-uploader__mask__icon' />
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
              <>
                <Icon
                  onClick={() => onRemove(i)}
                  size='lg'
                  className='tv-uploader__icon'
                  icon='icon-shut'
                />
              </>
            )}
          </View>
        ))}
        {((maxCount && list.length < maxCount) || !maxCount) && (
          <View onClick={onUpload} className='tv-uploader__upload'>
            {children || (
              <Icon size='xxl' icon='icon-plus' className='tv-uploader__add' />
            )}
          </View>
        )}
      </View>
    </View>
  );
};

export default Uploader;

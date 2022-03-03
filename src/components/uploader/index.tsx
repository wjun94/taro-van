import { chooseImage, previewImage } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import classNames from 'classnames';
import { useState } from 'react';
import Icon from '../Icon';

export type P = {
  className?: string;
  maxCount?: number; // 最大上传数
  isRemove?: boolean; // 是否有删除按钮
};

const Uploader = ({ className, isRemove, maxCount }: P) => {
  const prefixCls = 'tv-uploader';
  const [list, setList] = useState<string[]>([]);
  const classes = classNames(prefixCls, {}, className);
  /** 上传图片 */
  const onUpload = () => {
    console.log(maxCount);
    chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        setList((v) => [...v, res.tempFilePaths[0]]);
      },
    });
  };
  /**
   * 删除图片
   * @params idx 索引
   */
  const onRemove = (idx: number) => {
    setList((v) => {
      v.splice(idx, 1);
      return [...v];
    });
  };
  return (
    <View className={classes}>
      <View className='tv-uploader__wrapper'>
        {list.map((url: string, i: number) => (
          <View key={url} className='tv-uploader__preview'>
            <Image
              className='tv-uploader__img'
              onClick={() => previewImage({ current: url, urls: list })}
              mode='aspectFill'
              src={url}
            />
            {!isRemove && (
              <View onClick={() => onRemove(i)} className='tv-uploader__remove'>
                <Icon
                  size='md'
                  className='tv-uploader__icon'
                  icon='icon-close'
                />
              </View>
            )}
          </View>
        ))}
        {((maxCount && list.length < maxCount) || !maxCount) && (
          <View onClick={onUpload} className='tv-uploader__upload'>
            <Icon icon='icon-add' className='tv-uploader__add' />
          </View>
        )}
      </View>
    </View>
  );
};

export default Uploader;

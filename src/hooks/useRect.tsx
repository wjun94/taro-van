import { createSelectorQuery } from '@tarojs/taro';
import { useEffect, useState } from 'react';

export const useRect = (className) => {
  const [rect, setRect] = useState<any>({
    target: [],
  });
  useEffect(() => {
    setTimeout(() => {
      // 获取并保存所有节点位置信息
      const query = createSelectorQuery()
        .selectAll(className)
        .boundingClientRect();
      query.exec((target) => {
        setRect((v) => ({ ...v, target: target[0] }));
      });
    }, 100);
  }, []);
  return rect;
};

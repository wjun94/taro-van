import { MovableArea, MovableView, View } from '@tarojs/components';
import { pageScrollTo } from '@tarojs/taro';
import {
  cloneElement,
  ReactElement,
  ReactNode,
  useEffect,
  useState,
  Children,
} from 'react';

export type DragP = {
  children?: ReactNode | ReactNode[];
  disabled?: boolean; // 是否可以拖动
  height?: number; // 内容高度
  scrollHeight?: number; // 多少高度自动滚动
  animateCls?: string; // 可拖动动画样式
  dragItemCls?: string; // item样式
  isScroll?: boolean; // 是否自动滚动
  onEnd?: () => void;
  onDragEnd?: (startIdx: number, endIdx: number) => void;
};

export type P = {
  data: any[];
  renderItem: (item: any) => ReactNode;
  disabled?: boolean; // 是否可以拖动
  type?: 'default' | 'replace';
  onChange?: (data: any[], startIdx: number, endIdx: number) => void;
  onDragEnd?: (data: any[]) => void;
} & Omit<DragP, 'children' | 'onEnd'>;

export const Drag = ({
  children,
  onDragEnd,
  onEnd,
  disabled,
  dragItemCls,
  isScroll = true,
  scrollHeight = 600,
  height = 80,
  animateCls,
  ...props
}: DragP) => {
  const [startY, setStartY] = useState(0);
  const [startIdx, setStartIdx] = useState(0);
  const [isMove, setIsMove] = useState(false); // 是否可以拖动

  return disabled ? (
    <View onLongPress={() => !disabled && setIsMove(true)}>{children}</View>
  ) : (
    <MovableArea
      {...props}
      style={{ height: (children as any).length * height }}
      className='drag-body'
    >
      {Children.map(children, (child: ReactElement, i) => {
        return (
          <MovableView
            disabled={!isMove}
            y={i * height}
            onTouchStart={(event) => {
              // 拖动开始
              setStartY(event.changedTouches[0].pageY);
              setStartIdx(i);
            }}
            onLongPress={() => {
              // 长按(列表变可拖动)
              setIsMove(true);
            }}
            onClick={(e) => {
              setIsMove(false);
              onEnd && onEnd();
              e.stopPropagation();
            }}
            onVTouchMove={(event) => {
              if (isScroll) {
                const scroll =
                  parseInt(
                    String(event.changedTouches[0].pageY / scrollHeight),
                  ) * scrollHeight;
                // 拉到底部自动滚动
                pageScrollTo({
                  scrollTop: scroll,
                  duration: 50,
                });
              }
            }}
            onTouchEnd={(event) => {
              // 拖动结束
              if (!isMove) return;
              const idx = parseInt(
                String((event.changedTouches[0].pageY - startY) / height),
              );
              const target = startIdx + idx;
              const endIdx =
                target < 0
                  ? 0
                  : target > (children as any).length - 1
                  ? (children as any).length - 1
                  : target;
              onDragEnd && onDragEnd(startIdx, endIdx);
              setStartY(0);
            }}
            inertia
            direction='vertical'
          >
            {cloneElement(child, {
              className: `${child.props.className} ${dragItemCls} ${
                isMove && (animateCls || 'drag-ani')
              }`,
            })}
          </MovableView>
        );
      })}
    </MovableArea>
  );
};

const DragList = ({
  onChange,
  onDragEnd,
  type = 'default',
  renderItem,
  data = [],
  ...props
}: P) => {
  const [list, setList] = useState<any[]>([]);
  useEffect(() => {
    setList(data);
  }, [data]);

  /**
   * @params beforeIdx 拖动开始索引
   * @params endIdx 拖动结束索引
   * 拖动替换item位置
   */
  const onItemEnd = (beforeIdx: number, endIdx: number) => {
    let copyList: any = [...list];
    if (beforeIdx !== endIdx) {
      // 位置变化
      if (type === 'default') {
        const start = list[beforeIdx];
        const end = list[endIdx];
        if (beforeIdx < endIdx) {
          copyList.splice(endIdx, 1, end, start);
          copyList.splice(beforeIdx, 1);
        } else {
          copyList.splice(beforeIdx, 1);
          copyList.splice(endIdx, 1, start, end);
        }
      } else {
        // 替换位置
        copyList[beforeIdx] = list[endIdx];
        copyList[endIdx] = list[beforeIdx];
      }
      onChange && onChange([...copyList], beforeIdx, endIdx);
    } else {
      // 位置不变
      // setList([...copyList, null]);
    }
    setList([...copyList, null]);

    setTimeout(() => {
      setList([...copyList]);
    });
  };

  return (
    <Drag
      onEnd={() => onDragEnd && onDragEnd([...list.filter((item) => item)])}
      {...props}
      onDragEnd={onItemEnd}
    >
      {list.map((item, i) => (
        <View key={'drag-' + i}>{renderItem(item)}</View>
      ))}
    </Drag>
  );
};

export default DragList;

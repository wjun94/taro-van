import { ReactNode, useEffect, useState } from 'react';
import { ViewProps } from '@tarojs/components/types/View';
import clsx from 'classnames';
import { useRect } from '../../hooks/useRect';
import Typography from '../typography';
import Flex from '../flex';
import Icon from '../icon';

export type IconProps = {
  text: ReactNode;
  className?: string;
  background?: string;
  color?: string;
  mode?: 'closeable' | 'link';
  leftIcon?: ReactNode;
  scrollable?: boolean;
  speed?: number;
  onClose?: () => void;
  onReplay?: () => void;
};

const NoticeBar = ({
  className,
  text,
  color = '#ed6a0c',
  background = '#fffbe8',
  mode,
  leftIcon,
  scrollable,
  speed = 60,
  onClose,
  onReplay,
  ...props
}: IconProps & Omit<ViewProps, 'className'>) => {
  const width = 700;
  const dom = useRect('.tv-noticeBar-text');
  const domWidht = dom.target[0]?.width || 0;
  const [move, setMove] = useState(0);
  const [visible, setVisible] = useState(true);
  const prefixCls = 'tv-noticeBar';
  const classes = clsx(prefixCls, className);
  useEffect(() => {
    return () => {
      return clearInterval((NoticeBar as any).timer);
    };
  }, []);
  useEffect(() => {
    if (domWidht > 0 && scrollable) {
      (NoticeBar as any).timer = setInterval(() => {
        setMove((v) => {
          if (width + domWidht - v < -(domWidht / 10)) {
            onReplay && onReplay();
            return 0;
          }
          return v + 2;
        });
      }, speed);
    }
  }, [domWidht]);
  return visible ? (
    <Flex
      align='center'
      wrap='nowrap'
      style={{ background }}
      className={classes}
      {...props}
    >
      {leftIcon ? (
        Object.prototype.toString.call(leftIcon) === '[object Boolean]' ? (
          <Icon size='lg' style={{ color }} icon='icon-trumpet' />
        ) : (
          leftIcon
        )
      ) : (
        <></>
      )}
      <Flex align='center' className='tv-noticeBar-container'>
        {typeof text === 'string' ? (
          <Typography.Text
            style={{
              color,
              transform: `translateX(${
                scrollable ? (width + domWidht / 10) / 2 - move : 0
              }px)`,
            }}
            className={`tv-noticeBar-justify ${
              scrollable ? 'tv-noticeBar-text' : ''
            }`}
          >
            {text}
          </Typography.Text>
        ) : (
          text
        )}
      </Flex>
      {mode ? (
        <Icon
          onClick={() => {
            if (mode === 'closeable') {
              setVisible(false);
              clearInterval((NoticeBar as any).timer);
              onClose && onClose();
            }
          }}
          style={{ color }}
          size={mode === 'closeable' ? 'base' : 'lg'}
          icon={mode === 'closeable' ? 'icon-cross' : 'icon-arrow'}
        />
      ) : null}
    </Flex>
  ) : null;
};

export default NoticeBar;

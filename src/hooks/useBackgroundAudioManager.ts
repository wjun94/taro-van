import { getBackgroundAudioManager, hideToast, showModal, showToast } from '@tarojs/taro';
import React from 'react';

const backgroundAudioManager = getBackgroundAudioManager();

type Params = {
  src: string;
  title: string;
  key?: any;
};

export const useBackgroundAudioManager = () => {
  const [current, setCurrent] = React.useState<Params>();
  const [playing, setPlaying] = React.useState(false);
  const manager = React.useRef<Taro.BackgroundAudioManager>(backgroundAudioManager);

  React.useEffect(() => {
    manager.current.onWaiting(() => {
      showToast({ icon: 'loading', title: '音乐加载中...' });
    });
    manager.current.onCanplay(() => {
      hideToast();
    });
    manager.current.onPlay(() => setPlaying(true));
    manager.current.onPause(() => setPlaying(false));
    manager.current.onStop(() => setPlaying(false));
    manager.current.onEnded(() => {
      setPlaying(false);
    });

    manager.current.onError(() => {
      setPlaying(false);
      showModal({ title: '抱歉', content: '播放好像出了点问题', showCancel: false });
    });

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      manager.current.stop();
    };
  }, []);

  const toggle = () => {
    if (!manager.current.paused) {
      manager.current.pause();
    } else {
      manager.current.play();
    }
  };

  const play = (params: Params) => {
    setCurrent(params);
    if (!params.src) return;
    const source = params.src;
    if (source === manager.current.src) {
      toggle();
      return;
    }
    manager.current.src = source;
    manager.current.title = params.title;
  };

  React.useEffect(() => {
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      manager.current.stop();
    };
  }, []);

  const state = { ...current, playing, play };

  return state as typeof state;
};

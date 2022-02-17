// babel-preset-taro 更多选项和默认值：
// https://github.com/NervJS/taro/blob/next/packages/babel-preset-taro/README.md
module.exports =
  process.env.APP_ROOT === 'dumi'
    ? {}
    : {
        presets: [
          [
            'taro',
            {
              framework: 'react',
              ts: true,
            },
          ],
        ],
        plugins: [],
      };

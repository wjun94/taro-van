export default {
  chainWebpack(memo) {
    memo.plugins.delete('copy');
  },
  title: 'Taro-Van文档',
  mode: 'doc',
  metas: [
    {
      name: 'description',
      content: '📖 Taro-Van文档',
    },
  ],
  publicPath: process.env.NODE_ENV === 'development' ? '/' : '/taro-van',
  resolve: {
    // includes: ['docs'],
    excludes: ['src'],
  },
};

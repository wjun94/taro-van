export default {
  chainWebpack(memo) {
    memo.plugins.delete('copy');
  },
  title: 'Taro UI库',
  description: '📖 Taro-Van文档',
  mode: 'doc',
  // 然后 import('taro-van')，实际上是 import('/src')。
  alias: {
    'taro-van': '/src',
  },
  metas: [
    {
      name: 'description',
      content: '📖 Taro-Van文档',
    },
  ],
  // 设置路由前缀，通常用于部署到非根目录。
  base: process.env.NODE_ENV === 'development' ? '/' : '/taro-van',
  publicPath: process.env.NODE_ENV === 'development' ? '/' : '/taro-van/',
  resolve: {
    // includes: ['docs'],
    excludes: ['src'],
  },
};

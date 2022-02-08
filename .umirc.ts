import { defineConfig } from 'dumi';

console.log(process.env.NODE_ENV);

export default defineConfig({
  title: '笔记',
  mode: 'doc',
  publicPath: process.env.NODE_ENV === 'development' ? '/' : './',
  resolve: {
    includes: ['docs'],
    excludes: ['src'],
  },
  // more config: https://d.umijs.org/config
});

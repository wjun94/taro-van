import NodePath from 'path';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss-modules';
import typescript from 'rollup-plugin-typescript2';
import RollupCopy from 'rollup-plugin-copy';
import dts from 'rollup-plugin-dts';
import { terser } from 'rollup-plugin-terser';

const resolveFile = (path) => NodePath.resolve(__dirname, '..', path);

export default [
  // 打包声明文件
  {
    input: 'src/index.ts',
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
    plugins: [dts()],
  },
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'dist/index.esm.js',
        // 编译目标，es module
        format: 'es',
        sourcemap: true,
      },
    ],
    plugins: [
      // 支持第三方模块
      resolve(),
      // 支持 commonjs 格式
      commonjs(),
      json(),
      postcss({
        extract: true, // extracts to `${basename(dest)}.css`
        plugins: [],
        writeDefinitions: false,
        /* use: {
          less: { javascriptEnabled: true },
        }, */
        // modules: { ... }
        // 将css单独分离
        // extract: 'css/index.css',
      }),
      typescript({
        tsconfigOverride: { compilerOptions: { module: 'es2015' } },
      }),
      terser(),
      RollupCopy({
        targets: [
          {
            src: resolveFile('src/styles'),
            dest: resolveFile('dist'),
          },
        ],
      }),
    ],
    // 第三方模块不会强行打包到输出中
    external: [
      'react',
      'react-dom',
      '@tarojs/components',
      '@tarojs/runtime',
      '@tarojs/taro',
      '@tarojs/react',
    ],
  },
];

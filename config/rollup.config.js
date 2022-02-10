import NodePath from 'path';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss-modules';
import typescript from 'rollup-plugin-typescript2';
import RollupCopy from 'rollup-plugin-copy';
import dts from 'rollup-plugin-dts';
import clear from 'rollup-plugin-clear';
import { terser } from 'rollup-plugin-terser';
import pkg from '../package.json';

const externalPackages = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
  'tslib',
];
// Creating regexes of the packages to make sure subpaths of the
// packages are also treated as external
const regexesOfPackages = externalPackages.map(
  (packageName) => new RegExp(`^${packageName}(\/.*)?`),
);

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
        file: 'dist/dist/index.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'dist/dist/index.esm.js',
        // 编译目标，es module
        format: 'es',
        sourcemap: true,
      },
      {
        dir: 'dist/lib',
        format: 'cjs',
        sourcemap: true,
        preserveModules: true,
      },
      {
        dir: 'dist/es',
        // 编译目标，es module
        format: 'es',
        sourcemap: true,
        preserveModules: true,
      },
    ],
    plugins: [
      clear({ targets: ['dist'] }), //清除dist目录
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
    external: regexesOfPackages,
  },
];

import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import injectProcessEnv from 'rollup-plugin-inject-process-env';

import react from 'react';
import reactDom from 'react-dom';

const externalAry = [
  // 'react',
  //  /node_modules/
];

export default {
  input: 'app/index.js',
  output: {
    file: 'static/output.js',
    format: 'cjs',
    sourcemap: true,
  },
  plugins: [
    resolve(),
    commonjs({
      include: 'node_modules/**',
      namedExports: {
        react: Object.keys(react),
        'react-dom': Object.keys(reactDom),
      },
    }),
    babel({
      // exclude: '**/node_modules/**',
      runtimeHelpers: true,
    }),
    postcss({
      extract: 'style.css',
    }),
    injectProcessEnv({
      NODE_ENV: 'development',
    }),
  ],
  //不能使用正则匹配，有定制化组件也是以echarts命名
  external: externalAry,
};

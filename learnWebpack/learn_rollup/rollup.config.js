// commonjs 可以通过import导入
import commonjs from "@rollup/plugin-commonjs";
// nodeResolve 第三方依赖可以打包
import nodeResolve from "@rollup/plugin-node-resolve";
// babel
import babel from "@rollup/plugin-babel";
// terser
import { terser } from "rollup-plugin-terser";

export default {
  input: "./src/main.js",
  output: [
    {
      format: "iife",
      name: "zyp",
      file: "./build/zyp.iife.js",
      // 打包库文件，排除lodash，需指定全局变量
      globals: {
        lodash: "_",
      },
    },
  ],
  external: ["lodash"],
  plugins: [
    commonjs(),
    nodeResolve(),
    babel({
      babelHelpers: "bundled",
    }),
    terser(),
  ],
};

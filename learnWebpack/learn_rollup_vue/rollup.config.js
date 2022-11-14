// commonjs 可以通过import导入
// import commonjs from "@rollup/plugin-commonjs";
// nodeResolve 第三方依赖可以打包
import nodeResolve from "@rollup/plugin-node-resolve";
// babel
import babel from "@rollup/plugin-babel";
// terser
import { terser } from "rollup-plugin-terser";
// css
import postcss from "rollup-plugin-postcss";
// vue
import VuePlugin from "rollup-plugin-vue";
// 环境变量注入，vue需要注入环境变量 process.env.NODE_ENV
import replace from "rollup-plugin-replace";
// 开发本地服务
import Serve from "rollup-plugin-serve";
// livereload
import livereload from "rollup-plugin-livereload";

const isProduction = process.env.NODE_ENV === "production";
console.log(isProduction);

const plugins = [
  // commonjs(),
  nodeResolve(),
  replace({
    "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
  }),
  babel({
    babelHelpers: "bundled",
  }),
  VuePlugin(),
  postcss(),
];

if (isProduction) {
  plugins.push(terser());
} else {
  plugins.push(
    Serve({
      open: true,
      port: 8080,
      contentBase: ".",
    }),
    livereload()
  );
}

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
  plugins,
};

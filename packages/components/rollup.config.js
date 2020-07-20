import postcss from "rollup-plugin-postcss";
import typescript from "rollup-plugin-typescript2";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

import pkg from "./package.json";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: pkg.main,
        format: "cjs",
        exports: "named",
        sourcemap: true,
        strict: false,
      },
    ],
    plugins: [
      peerDepsExternal(),
      postcss({
        modules: true,
      }),
      resolve(),
      commonjs(),
      typescript(),
    ],
    external: ["react", "react-dom"],
  },
  {
    input: "src/hooks/index.ts",
    output: [
      {
        file: "lib/hooks/index.js",
        format: "cjs",
        exports: "named",
        sourcemap: true,
        strict: false,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({
        tsconfigOverride: { compilerOptions: { declaration: false } },
      }),
    ],
    external: ["react", "react-dom", "@reach/router"],
  },
];

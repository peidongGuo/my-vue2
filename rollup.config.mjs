import babel from "@rollup/plugin-babel";

export default {
  input: "./src/index.js",
  output: {
    name: "Vue",
    file: "dist/vue.js",
    format: "umd",
  },
  plugins: [
    babel({
      exclude: "node_modules/**",
    }),
  ],
};

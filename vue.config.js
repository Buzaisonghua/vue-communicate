const { defineConfig } = require("@vue/cli-service");
const path = require("path");

module.exports = defineConfig({
  // ...
  configureWebpack: {
   // 👇🏻 这个配置
    resolve: {
      symlinks: false,
      alias: {
        vue: path.resolve("./node_modules/vue"),
      },
    },
  },
  // ...
});
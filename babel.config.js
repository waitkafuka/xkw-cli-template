/**
 * @Author: zuokangsheng
 * @Date:   2021-11-16 18:46:29
 * @Last Modified by:   zuokangsheng
 * @Last Modified time: 2021-11-18 11:38:39
 */
module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    [
      "component",
      {
        libraryName: "element-ui",
        styleLibraryName: "theme-chalk",
      },
    ],
  ],
};

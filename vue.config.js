/**
 * @Author: zuokangsheng
 * @Date:   2021-11-17 19:55:52
 * @Last Modified by:   zuokangsheng
 * @Last Modified time: 2021-11-17 19:55:59
 */
module.exports = {
  devServer: {
    disableHostCheck: true,
    proxy: {
      "/api": {
        target: "https://design.zxxk.com/",
      },
    },
  },
};

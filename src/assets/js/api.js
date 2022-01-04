/**
 * @Author: zuokangsheng
 * @Date:   2021-11-17 15:32:32
 * @Last Modified by:   zuokangsheng
 * @Last Modified time: 2021-11-17 17:21:57
 */
const prefix = "api";
export default {
  user: {
    login: `${prefix}/user/login`,
    info: `${prefix}/user/getUserInfo`,
  },
  post: {
    list: `${prefix}/post/list`,
  },
};

/**
 * 文档地址：https://www.npmjs.com/package/axios
 */
import axios from "axios";
import { Message } from "element-ui";

/**
 * 创建axios实例
 */
const axiosInstance = axios.create({
  baseURL: "/",
  timeout: 10000,
});

/**
 * 全局处理返回response对象
 */
axiosInstance.interceptors.response.use(
  ({ data }) => {
    if (data.code == 401) {
      window.location.href = "登录页面地址";
    } else if (data.code == 500 || data.code == 502) {
      Message({
        message: "服务器错误" + data.code,
        type: "error",
        duration: 3 * 1000,
      });
    } else {
      return data;
    }
  },
  (error) => {
    console.error("err" + error); // for debug
    Message({
      message: error.message,
      type: "error",
      duration: 5 * 1000,
    });
    return Promise.reject(error);
  }
);

/**
 * 发起post请求
 * @param {*} url 请求地址
 * @param {*} data 传递参数，json格式
 * @returns promise
 */
const post = function (url, data) {
  return axiosInstance.post(url, data);
};

/**
 * 发起get请求
 * @param {*} url 请求地址
 * @param {*} params 请求参数，json格式
 * @returns
 */
const get = function (url, params = {}) {
  //每个入参后边加上时间戳，解决IE9对接口缓存问题
  params = Object.assign(params, { _t: new Date().getTime() });
  return axiosInstance.get(url, { params });
};

/**
 * 发起delete请求
 * @param {*} url 请求地址
 * @param {*} params 请求参数
 * @returns promise
 */
const del = function (url, params) {
  return axiosInstance.delete(url, { params });
};

/**
 * 发起put请求
 * @param {*} url 请求地址
 * @param {*} data 请求数据
 * @returns promise
 */
function put(url, data) {
  return axiosInstance.put(url, data);
}

export default {
  get,
  post,
  del,
  put,
};

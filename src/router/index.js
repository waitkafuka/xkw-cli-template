import Vue from "vue";
import VueRouter from "vue-router";
import login from "../views/login.vue";
import mainLayout from "../layout/main.vue";
import index from "../views/index.vue";
import store from "@/store/index";
import api from "@/assets/js/api";
import { isNotEmpty } from "@/assets/js/utils";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: login,
    meta: {
      needLogin: false,
    },
  },
  {
    path: "/",
    component: mainLayout,
    children: [
      {
        path: "/",
        name: "main-layout-index",
        component: index,
        meta: {
          needLogin: true,
        },
      },
      {
        path: "/material/list",
        name: "material-list",
        component: () => import("../views/material/list"),
        meta: {
          needLogin: true,
          title: "文章列表",
        },
      },
      {
        path: "/material/detail",
        name: "material-detail",
        component: () => import("../views/material/detail"),
        meta: {
          needLogin: true,
        },
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

/**
 * 获取用户基本信息
 * @returns
 */
async function getUserInfo() {
  let info = store.state.user.userinfo;
  if (isNotEmpty(info)) {
    return info;
  } else {
    let { user } = await router.app.$axios.get(api.user.info);
    if (user) {
      store.commit("user/setUserInfo", user);
    }
    return user;
  }
}

/**
 * 获取用户权限列表
 * @returns
 */
async function getUserPermission() {
  let permissionCodeList = store.state.user.permissionCodeList;
  if (isNotEmpty(permissionCodeList)) {
    return permissionCodeList;
  } else {
    //调用接口获取用户权限列表
    const data = ["1", "2", "3", "4", "5", "6", "7"];
    store.commit("user/setUserPermisstionCodeList", data);
    return data;
  }
}

//屏蔽重复点击路由时的警告
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

router.beforeEach(async (to, from, next) => {
  let userInfo = await getUserInfo();
  //无需验证，或者已经登录，放行
  if (!to.meta.needLogin || isNotEmpty(userInfo)) {
    //高亮当前页面所对应菜单
    store.commit("setActiveIndex", to.path);
    //获取用户权限
    await getUserPermission();
    next();
  } else {
    next("/login");
  }
});

export default router;

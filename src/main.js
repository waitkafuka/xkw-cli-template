/**
 * @Author: zuokangsheng
 * @Date:   2021-11-16 18:46:29
 * @Last Modified by:   zuokangsheng
 * @Last Modified time: 2021-11-18 11:46:51
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "@/assets/js/request";
import mixin from "@/mixin/global-mixin";
//按需引入
import element from "@/assets/js/element-ui";
Vue.use(element);

//全量引入
// import ElementUI from "element-ui";
// import "@/assets/theme/index.css";
// Vue.use(ElementUI);

import QueryConditionBox from "@/components/query-condition-box";

Vue.config.productionTip = false;

Vue.prototype.$axios = axios;

Vue.component(QueryConditionBox.name, QueryConditionBox);

Vue.mixin(mixin);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

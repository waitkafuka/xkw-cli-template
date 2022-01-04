export default {
  namespaced: true,
  state: {
    userInfo: {},
    permissionCodeList: [],
  },
  mutations: {
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo;
    },
    setUserPermisstionCodeList(state, permissionCodeList) {
      state.permissionCodeList = permissionCodeList;
    },
  },
};

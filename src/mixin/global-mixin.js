import { mapState } from "vuex";
export default {
  data() {
    return {
      GLOBAL_PROJECT_NAME: "网校通",
    };
  },
  computed: {
    ...mapState({
      currentActiveMenuPath: "activeIndex",
    }),
    ...mapState("user", ["userInfo", "permissionCodeList"]),
    ...mapState("course", ["userCourseSelected"]),
  },
  methods: {
    //判断是否有权限
    isHaveAuth(code) {
      return this.permissionCodeList.includes(code);
    },
  },
  mounted() {},
};

<script>
/**
 * @Author: zuokangsheng
 * @Date:   2021-11-16 18:46:29
 * @Last Modified by:   zuokangsheng
 * @Last Modified time: 2021-11-23 14:29:05
 */
</script>
<template>
  <div class="index" :class="{ collapse: isCollapse }">
    <el-container>
      <el-aside>
        <div class="aside-title">
          <div class="title-content">学科网内容管理系统</div>
        </div>
        <el-menu
          class="el-menu-vertical-demo"
          background-color="#202e56"
          text-color="#fff"
          active-text-color="#fff"
          :collapse="isCollapse"
          :collapse-transition="false"
          :default-active="currentActiveMenuPath"
        >
          <el-submenu
            :index="String(index)"
            v-for="(menu, index) in menuList"
            :key="menu.title"
            v-if="isHaveAuth(menu.permissionCode)"
          >
            <template slot="title">
              <i :class="menu.icon"></i>
              <span>{{ menu.title }}</span>
            </template>
            <el-menu-item
              v-for="childMenu in menu.children"
              v-if="isHaveAuth(childMenu.permissionCode)"
              :key="childMenu.title"
              :index="childMenu.path"
              @click="to(childMenu.path)"
              >{{ childMenu.title }}</el-menu-item
            >
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <div class="header-left-box">
            <div class="toggle-collapse-btn" @click="toggleAside">
              <i
                :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
              ></i>
            </div>
            <div class="user-show">欢迎您：{{ userInfo.displayName }}</div>
            <div class="user-show">所属项目：{{ GLOBAL_PROJECT_NAME }}</div>
            <div class="user-show">
              所选课程：{{ userCourseSelected.courseShow }}
            </div>
          </div>
          <div class="header-right-box">
            <div class="user-logout" @click="logout">
              <i class="el-icon-switch-button"></i> 退出登录
            </div>
          </div>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
        <!-- <el-footer>Footer</el-footer> -->
      </el-container>
    </el-container>
  </div>
</template>
<script>
import cookie from "js-cookie";
export default {
  data() {
    return {
      isCollapse: false,
      userinfo: "",
      menuList: [
        {
          title: "素材管理",
          icon: "el-icon-location",
          permissionCode: "1",
          children: [
            {
              title: "素材列表",
              permissionCode: "2",
              path: "/material/list",
            },
            {
              title: "素材详情",
              permissionCode: "3",
              path: "/material/detail",
            },
          ],
        },
        {
          title: "演示示例",
          permissionCode: "4",
          icon: "el-icon-user",
          children: [
            {
              title: "菜单1",
              permissionCode: "5",
            },
            {
              title: "菜单2",
              permissionCode: "7",
            },
          ],
        },
      ],
    };
  },
  methods: {
    to(url) {
      this.$router.push(url);
    },
    toggleAside() {
      this.isCollapse = !this.isCollapse;
    },
    logout() {
      cookie.remove("user");
      this.$router.push("/login");
    },
  },
};
</script>
<style lang="scss">
$aside-width: 230px;
$aside-collapse-width: 65px;
$header-height: 46px;
$footer-height: 0px;
$aside-bg-color: #202e56;

header.el-header {
  height: $header-height !important;
  line-height: $header-height;
  // background-color: #3c8dbc;
  color: #333;
  padding-left: $aside-width;
  transition: all 0.3s;
  box-shadow: 0 0 0 1px #333;
}

.aside-title {
  height: 60px;
  line-height: 60px;
  background-color: $aside-bg-color;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
}

.el-aside {
  background-color: $aside-bg-color;
  text-align: center;
  line-height: 200px;
  width: $aside-width !important;
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  transition: all 0.3s;
}

div.collapse {
  .el-aside {
    width: $aside-collapse-width !important;
  }
  .title-content {
    display: none;
  }
  .el-header {
    padding-left: $aside-collapse-width;
  }
  .el-main {
    margin-left: $aside-collapse-width;
  }
}

.el-main {
  background-color: #e9eef3;
  margin-left: $aside-width;
  transition: all 0.3s;
  height: calc(100vh - #{$header-height} - #{$footer-height});
  // #2d3b40
}

ul.el-menu {
  border-right: 0;
}

.el-menu-item:hover,
.el-submenu__title:hover,
.el-menu-item.is-active {
  background-color: #5a83ff !important;
  color: #fff !important;
  i {
    color: #fff !important;
  }
}

.header-left-box {
  float: left;
}

.header-right-box {
  float: right;
}
.toggle-collapse-btn {
  font-size: 18px;
  margin-left: 15px;
  cursor: pointer;
  color: #5a83ff;
  margin-left: 20px;
  float: left;
}
.user-show {
  margin-left: 20px;
  float: left;
}
.user-logout {
  cursor: pointer;
}

.el-form-item {
  margin-bottom: 11px !important;
}
.query-conditions {
  padding-top: 11px !important;
}
.el-table div.cell,
.el-table--border .el-table__cell:first-child .cell,
.el-table th.el-table__cell > .cell {
  padding-left: 20px;
  padding-right: 20px;
}
</style>

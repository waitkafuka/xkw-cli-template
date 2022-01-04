<script>
/**
 * @Author: zuokangsheng
 * @Date:   2021-11-16 18:46:29
 * @Last Modified by:   zuokangsheng
 * @Last Modified time: 2021-11-18 09:55:20
 */
</script>
<template>
  <div class="login-page">
    <div class="login-wrapper">
      <div class="login-bg-box" id="login-animation-lottie"></div>
      <div class="login-form-box">
        <h2>WELCOME</h2>
        <h3>欢迎使用</h3>
        <h4>学科网内容管理系统</h4>
        <p>北京凤凰学易科技有限公司</p>
        <el-form
          :model="userinfo"
          status-icon
          :rules="rules"
          ref="loginForm"
          class="demo-ruleForm"
        >
          <el-form-item prop="username">
            <el-input
              v-model="userinfo.username"
              placeholder="用户名"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              type="password"
              v-model="userinfo.password"
              placeholder="密码"
              @keydown.enter.native="doLogin"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              :loading="loading"
              style="width: 100%"
              type="primary"
              @click="doLogin"
              >登录</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import lottie from "lottie-web";
import cookie from "js-cookie";
import api from "@/assets/js/api";

const animationJson = require("@/assets/json/login-lottie.json");

export default {
  name: "login",
  data() {
    return {
      rules: {
        username: [{ required: true, message: "请输入用户名" }],
        password: [{ required: true, message: "请输入密码" }],
      },
      userinfo: {
        username: "",
        password: "",
      },
      loading: false,
    };
  },
  components: {},
  mounted() {
    this.buildLottie();
  },
  methods: {
    //登录
    doLogin() {
      this.$refs.loginForm.validate(async (valid) => {
        if (valid) {
          this.loading = true;
          let { msg, state, user } = await this.$axios.post(
            api.user.login,
            this.userinfo
          );
          if (state === 0) {
            cookie.set("user", JSON.stringify(user));
            this.$router.push("/");
          } else {
            this.$message.error(`登录失败：${msg}`);
          }
          this.loading = false;
        } else {
          console.log("验证失败");
        }
      });
    },
    //构建动画
    buildLottie() {
      lottie.loadAnimation({
        container: document.getElementById("login-animation-lottie"), // the dom element that will contain the animation
        renderer: "canvas",
        loop: true,
        autoplay: true,
        animationData: animationJson,
        // path: '/login-lottie.json' // the path to the animation json
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.login-page {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #5a83ff;
}
.login-wrapper {
  width: 1140px;
  margin: 0 auto;
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  overflow: hidden;
  .login-bg-box {
    width: 750px;
    height: 560px;
    background-color: #f2f5fe;
    img {
      width: 100%;
    }
  }
  .login-form-box {
    width: 390px;
    box-sizing: border-box;
    padding: 50px 40px 30px 40px;
    background-color: #fff;
    position: relative;
    h2 {
      font-size: 50px;
      color: #f1f3ff;
      line-height: 50px;
    }
    h3 {
      font-size: 26px;
      color: #6384fb;
    }
    h4 {
      font-size: 20px;
      color: #555;
      margin-bottom: 30px;
    }
    p {
      color: #a0a0a0;
      position: absolute;
      bottom: 30px;
      left: 0;
      right: 0;
      margin-top: 65px;
      text-align: center;
      &::before,
      &::after {
        content: "";
        width: 86px;
        height: 1px;
        background: #d3d3d3;
        position: absolute;
        top: 11px;
      }
      &::before {
        left: 20px;
      }
      &::after {
        right: 20px;
      }
    }
  }
}
.el-form {
  margin-top: 60px;
}
.el-form-item {
  margin-top: 35px;
}
</style>

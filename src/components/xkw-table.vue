<script>
/**
 * @Author: zuokangsheng
 * @Date:   2021-11-17 19:15:15
 * @Last Modified by:   zuokangsheng
 * @Last Modified time: 2021-11-23 14:32:33
 */
</script>
<template>
  <div class="xkw-table">
    <h3>{{ tableName }}</h3>
    <el-table v-bind="finalProps" v-on="$listeners">
      <slot />
    </el-table>
  </div>
</template>

<script>
export default {
  name: "xkw-table",
  inheritAttrs: false,
  props: {
    value: {
      type: String,
      default: "",
    },
    tableName: {
      type: String,
      default: "",
    },
  },
  mounted() {
    console.log(this.tableName);
    console.log(this.value);
    // this.tableName = "xkw-table";
    this.$emit("update:tableName", "123");
    this.$emit("input", "a new value");
  },
  computed: {
    finalProps() {
      return {
        border: true,
        stripe: true,
        ...this.$attrs,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.el-table,
.xkw-table {
  border-radius: 5px;
  overflow: hidden;
}
</style>

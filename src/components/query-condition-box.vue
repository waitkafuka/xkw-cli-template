<script>
/**
 * @Author: zuokangsheng
 * @Date:   2021-11-17 19:16:40
 * @Last Modified by:   zuokangsheng
 * @Last Modified time: 2021-11-23 14:31:33
 */
</script>
<template>
  <div class="query-conditions">
    <slot />
  </div>
</template>

<script>
export default {
  name: "query-condition-box",
};
</script>

<style lang="scss" scoped>
.query-conditions {
  background-color: #fff;
  padding: 22px 22px 0 22px;
  margin-bottom: 20px;
  border-radius: 5px;
}
</style>

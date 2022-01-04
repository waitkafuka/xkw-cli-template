<script>
/**
 * @Author: zuokangsheng
 * @Date:   2021-11-17 17:01:28
 * @Last Modified by:   zuokangsheng
 * @Last Modified time: 2021-11-18 10:40:16
 */
</script>
<template>
  <div class="list-root">
    <query-condition-box>
      <el-form :inline="true" :model="queryParams" class="demo-form-inline">
        <el-form-item label="关键词：">
          <el-input
            v-model="queryParams.keyWord"
            placeholder="关键词"
          ></el-input>
        </el-form-item>
        <el-form-item label="标签：">
          <el-select clearable v-model="queryParams.tagName" placeholder="标签">
            <el-option label="专题" value="专题"></el-option>
            <el-option label="端午" value="端午"></el-option>
            <el-option label="星空" value="星空"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="日期：">
          <el-col :span="11">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="queryParams.start"
              style="width: 100%"
            ></el-date-picker>
          </el-col>
          <el-col class="line" :span="2"> - </el-col>
          <el-col :span="11">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="queryParams.end"
              style="width: 100%"
            ></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-search" @click="queryList"
            >查询</el-button
          >
        </el-form-item>
      </el-form>
    </query-condition-box>
    <div class="result-container">
      <xkw-table v-loading="loading" :data="postList" v-model="tableName">
        <el-table-column prop="display_name" label="作者" width="180">
        </el-table-column>
        <el-table-column prop="post_title" label="标题">
          <template slot-scope="scope">
            <router-link to="/material/detail">{{
              scope.row.post_title
            }}</router-link>
          </template>
        </el-table-column>
        <el-table-column label="标签">
          <template slot-scope="scope">
            <el-tag
              style="margin: 5px 5px 0 0"
              v-for="(tag, index) in scope.row.tag.split(',')"
              :key="index"
              :type="index % 2 === 0 ? 'primary' : 'success'"
              >{{ tag }}</el-tag
            >
          </template>
        </el-table-column>
        <el-table-column prop="thumb_url" label="封面"> </el-table-column>
        <el-table-column prop="post_modified" label="日期"> </el-table-column>
      </xkw-table>
    </div>
  </div>
</template>

<script>
import api from "@/assets/js/api";
import XkwTable from "@/components/xkw-table";

export default {
  data() {
    return {
      postList: [],
      loading: false,
      queryParams: {},
      tableName: "文章列表",
    };
  },
  components: {
    XkwTable,
  },
  mounted() {
    this.queryList();
  },
  methods: {
    async queryList() {
      this.loading = true;
      let params = {
        pageNum: 1,
        pageSize: 20,
        termId: null,
        keyWord: "",
        postAuthor: null,
        id: "",
        tagName: "",
      };
      params = Object.assign(params, this.queryParams);
      const postList = await this.$axios.post(api.post.list, params);
      this.postList = postList.list;
      this.loading = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.line {
  text-align: center;
}
</style>

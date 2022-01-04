# xkw-cli-template
集成了以下特性：  
1.封装请求工具  
2.统一eslint风格配置  
3.路由懒加载和路由守卫  
4.集成全局mixin  
5.集成element-ui，并提供按需加载。如需修改主题可通过修改 `@/assets/scss/element-varibles.scss` 方便实现  
6.封装常用 `el-table` 组件  
7.按模块组织 `vuex`  
8.提供常用查询示例

## 包管理工具
使用yarn

## 安装依赖
```
yarn
```

### 编译开发
```
yarn serve
```

### 生产构建
```
yarn build
```

### 校验，修复文件
```
yarn lint
```

### 自定义配置
See [Configuration Reference](https://cli.vuejs.org/config/).

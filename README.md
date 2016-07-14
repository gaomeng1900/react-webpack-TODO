# react-webpack-TODO
TODO demo with react/webpack

----

### shedule

- [x] 脚手架
- [x] 静态开发/设计
- [x] 接口设计
- [x] node 接口实现
- [x] react/redux/thunk 编码实现

### Features

- restful 接口
- React实现
- Redux控制状态
- redux-thunk实现异步action
- fetch接口/ES6/lodash
- ANT组件
- jade/sass
- webpack打包
- 热重载

### Install

`tnpm/cnpm/npm install`

### Run

`npm start`

### 结构

```
.
├── LICENSE
├── node_modules // 依赖包
├── package.json // npm配置文件
├── README.md
├── server.js    // webpackp-dev-server & 服务器端REST接口
├── src          // 前端源码
│   ├── component // 组件
│   │   ├── App.js          // 根组件(容器组件)
│   │   ├── AppRedux.js     // Redux部分
│   │   ├── ControlBar.js   // 按钮栏组件(展示组件)
│   │   ├── Footer.js       // 页脚(展示组件)
│   │   ├── TodoInput.js    // 输入栏(展示组件)
│   │   ├── Todo.js         // 项目(展示组件)
│   │   └── TodoList.js     // 项目列表(展示组件)
│   ├── index.jade  // 入口html
│   ├── index.js    // 入口js
│   └── index.scss  // 全局样式
└── webpack.config.js // webpack配置文件

```

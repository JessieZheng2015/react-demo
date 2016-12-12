## 介绍

React Demo

## 使用方法

### 安装依赖

```sh
npm install
```

安装Demo依赖

### 运行项目

```sh
http-server .
```

可以先安装http-server, 或者直接双击`index.html`文件查看效果

### 开发调试

```sh
npm run dev
```
会开启监听功能

```sh
npm run dist
```
不开启监听功能

## 主要目录结构

```
.
├── dist/               # 压缩优化后的静态文件，不能手动修改该目录中的文件
├── src/                # 所有的静态源文件放在该目录，线上一般不会直接引用该文件夹中的文件
│   ├── images/
│   ├── scripts/
│   └── styles/
├── node_modules/       # node 模块安装目录，注意，要将该目录添加到 svn 的忽略列表，不能提交
├── index.html          # 预览页面
├── webpack.config.js
└── package.json
```
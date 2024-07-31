# 基于Express实现的博客站点

通过 Express 搭建一个博客站点，在逐步的实战过程中，了解前后端最基本的功能实现和知识点。

## 目标

实现一个博客站点，包含以下功能

- 博客
  - 列表（已实现）
  - 创建新博文（后端API已实现）
    - 需要实现前端功能
    - 需要优化API，与用户表关联起来
  - 更新已有博文
  - 删除已有博文
- 用户
  - 用户登录（前端功能已部分实现）
  - 用户注册

## 依赖

- [Express](https://expressjs.com/) 基于 Node.js 平台，快速、开放、极简的 Web 开发框架。
- [sqlite3](https://www.runoob.com/sqlite/sqlite-tutorial.html) 是一个软件库，实现了自给自足的、无服务器的、零配置的、事务性的 SQL 数据库引擎。
- [Sequelize](https://sequelize.org/) 是一个基于 promise 的 Node.js ORM 工具, 目前支持 Postgres, MySQL, MariaDB, SQLite 以及 Microsoft SQL Server, Amazon Redshift 和 Snowflake’s Data Cloud. 它具有强大的事务支持, 关联关系, 预读和延迟加载,读取复制等功能.
- [vue3](https://cn.vuejs.org/) 是一款用于构建用户界面的 JavaScript 框架。
- [Element Plus](https://element-plus.org/zh-CN/) 基于 Vue 3，面向设计师和开发者的组件库。

## REST

创建新博文 API 测试报文。`::host::`替换成服务器地址和端口。

```
POST ::host::/api/v1/create/blog HTTP/1.1
content-type: application/json

{
    "title": "Some1 Blog", 
    "author": "Someone", 
    "content": "This is Some1 Blog from Someone"
}
```
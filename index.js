const express = require('express');
const { sequelize, Blog } = require('./db');

const app = express();

app.use(express.json());
app.use(express.static('./public'));

app.get("/api/v1/get/blog", async (req, res) => {
  const blogs = await Blog.findAll();
  res.status(200).json(blogs);
});

app.post("/api/v1/create/blog", async (req, res) => {
  const {title, author, content} = req.body;
  if (title && author && content) {
    const blog = await Blog.create({ title, author, content });
    res.status(200).end(String(blog.id));
  } else {
    res.status(500).end("参数不对");
  }
});

app.listen(8080, async () => {
  console.log("服务器启动成功~");
   try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
      await sequelize.sync();
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
})
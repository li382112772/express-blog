const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
});

const Blog = sequelize.define('Blog', {
  title: {
    type: DataTypes.STRING,
  },
  author: {
    type: DataTypes.STRING
  },
  content: {
    type: DataTypes.TEXT
  }
}, {
  // Other model options go here
});

module.exports = {
  sequelize,
  Blog,
};
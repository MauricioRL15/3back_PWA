// src/config/databaseConfig.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  username: 'root',
  password: 'admin',
  database: 'back_cuper',
  port:3307,
});

module.exports = sequelize;

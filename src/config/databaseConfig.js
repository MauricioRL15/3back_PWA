// src/config/databaseConfig.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: '34.123.251.211',
  username: 'root',
  password: 'VJ5LX7X4O(.D%Jhj',
  database: 'back_cuper2',
  define: {
    timestamps: false,
  },
  dialectOptions: {
    connectTimeout: 60000,
  },
});

module.exports = sequelize;
require('dotenv').config()
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_DBNAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    define: {
      freezeTableName: true
    },
  },
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })


module.exports = sequelize;

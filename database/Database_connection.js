require('dotenv').config()
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres://hospital_zmko_user:9XJzJMgYgTwCQSfVQfFjl6Iuyn1jnkpq@dpg-cg4asl2k728m6o5krhu0-a.oregon-postgres.render.com/hospital_zmko');
//   process.env.DB_DBNAME,
//   process.env.DB_USER,
//   process.env.DB_PASSWORD,
//   {
//     host: process.env.DB_HOST,
//     dialect: 'postgres',
//     define: {
//       freezeTableName: true
//     },
//   },
// );

try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

module.exports = sequelize;

require('dotenv').config()
const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize('postgres://hospital_zmko_user:9XJzJMgYgTwCQSfVQfFjl6Iuyn1jnkpq@dpg-cg4asl2k728m6o5krhu0-a.oregon-postgres.render.com/hospital_zmko');
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
const sequelize = new Sequelize({
  database: "hospital_zmko",
  username: "hospital_zmko_user",
  password: "9XJzJMgYgTwCQSfVQfFjl6Iuyn1jnkpq",
  host: "dpg-cg4asl2k728m6o5krhu0-a",
  port: 5432,
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false 
    }
  },
});

sequelize.authenticate().then(() => {
  console.log("Success!");
}).catch((err) => {
  console.log(err);
});

module.exports = sequelize;


const mySql = require("mysql2/promise");
require("dotenv").config();

const pool =mySql.createPool({
  host:     process.env.DB_HOST,
  user:     process.env.DB_USER,
  port: process.env.DB_PORT,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
})

module.exports ={pool};
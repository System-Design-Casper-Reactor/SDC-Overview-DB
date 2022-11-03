require('dotenv').config();
const { Pool } = require('pg');
console.log('Yo!')

const pool = new Pool({
  user: process.env.USER,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PORT,
  host: process.env.HOST
})


module.exports = pool;
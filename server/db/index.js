require('dotenv').config();
const { Pool } = require('pg');
console.log('Yo!')

const pool = new Pool({
  user: process.env.USER,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  idleTimeoutMillis: 0,
  connectionTimeoutMillis:0
})


module.exports = pool;
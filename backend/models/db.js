const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',       // replace with your DB user
  host: 'localhost',
  database: 'deploynova', // create this DB manually
  password: 'password',   // replace with your password
  port: 5432
});

module.exports = pool;

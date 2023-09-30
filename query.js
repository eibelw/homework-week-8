const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "HW8",
  password: "user",
  port: 5432,
});

module.exports = pool;

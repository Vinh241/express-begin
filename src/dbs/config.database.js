var mysql = require('mysql2');

var connection = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "ecommerce",
  password: "vinh2412003"
});
module.exports = connection.promise()
const mysql = require('mysql');
const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Asdfghjkl12.',
  database: 'carsdb'
});
module.exports = connection;
const mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "todolist_mvc_01"
});

module.exports = con;

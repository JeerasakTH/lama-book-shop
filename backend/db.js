const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "test",
  port: 3309,
});

connection.connect(function (error) {
  if (!!error) {
    console.log(error);
  } else {
    console.log("DB connected!");
  }
});

module.exports = connection;

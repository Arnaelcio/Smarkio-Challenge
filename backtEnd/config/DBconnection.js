const mysql = require("mysql2/promise");

module.exports = () =>
  mysql.createPool({
    host: "mysql742.umbler.com",
    user: "smarkio_db",
    password: "smarkio_Dbsmarkio_Db",
    database: "smarkio_db",
    port: "41890",
  });

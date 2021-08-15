const Sequelize = require("sequelize");
require("dotenv").config();
var mysql = require("mysql2");

let sequelize;

console.log(process.env.JAWSDB_URL);
console.log(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW);

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PW,
    {
      host: "localhost",
      dialect: "mysql",
      port: 3306,
    }
  );
}

// if (process.env.JAWSDB_URL) {
//   connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
//   var connection = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: "2750valleydrive",
//     database: model_view_controller_2000_db,
//   });
// }

module.exports = sequelize;

// initialize Sequelize from node package manager
const Sequelize = require('sequelize');
// enables connection to access .env data
require('dotenv').config()


let sequelize;

// enables HEROKU or LOCALHOST to access user, database, password, and mysql
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}

module.exports = sequelize;
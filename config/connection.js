//import the Sequelize constructor from the library 
const Sequelize = require('sequelize');

require('dotenv').config();

//create connection to our database, pass in your mySQL info for user and pass

let sequelize;

//jawsDB for heroku
if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    });
}

module.exports = sequelize;
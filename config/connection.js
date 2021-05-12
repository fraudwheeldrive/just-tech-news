const Sequelize = require('sequelize');

require('dotenv').config();

const sequlize = new Sequelize('just_tech_news_db' , 'username', 'password', {
    host: 'localhost',
    dialects: 'mysql',
    port: 3306
});

module.exports = sequlize;
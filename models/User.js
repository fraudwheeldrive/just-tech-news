const  {Model, DataTypes } = require('sequelize');
const sequlize = require('../config/connection');

//create user model 
class User extends Model {}

//define table columns and config
User.init(
    {
        //table column def go here
    // id column 
    id: {
        type: DataTypes.INTEGER,
        allowNULL:false,
        primaryKey: true,
        autoIncrement: true
    },
    // user column 
    username: {
        type: DataTypes.STRING,
        allowNull: false 
    },
    //email column
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    // password
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validated: {
            len: [4]
        }
    }
    },

    {
        //table config options go here (https://sequelize.org/v5/manual/models-definition.html#configuration))

        // oass in our imported sequelize connection (the direct connection to our database)
        sequlize,
        // dont automaticall create createdAT/updatedAt timestamp fields
        timestamps: false,
        // don't pluralize name of database table 
        freeTableName: true,
        // use underscores instead of camel-casing (i.e `comment_text` and not `commentText` )
        underscored: true, 
        // make it so our model name stays lowercase in the db 
        modelName: 'user'
    }
);

module.exports = User; 
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our User model
class User extends Model {}

// define table columns and configuration
User.init(
  {
    //define an id column
    id: {
        //use the special Sequelize DataTypes object provide what type of data it is
        type: DataTypes.INTEGER,
        //equivalent of sql's `NOT NULL` option
        allowNull: false,
        //instruct that this is the Primary Key
        primaryKey: true,
        //turn on auto increment 
        autoIncrement: true
    },
    //define a username column 
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    //define an email column 
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        //there cannot be duplicate emails in table
        unique: true,
        //if AllowNull is set to false, we can run data through validation
        validate: {
            isEmail: true
        }
    },
    //define a password column 
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            //this means password ,ust be at least 4 characters 
            len: [4]
        }
    }
  },
  {
        // pass in our imported sequelize connection (the direct connection to our database)
    sequelize,
    // don't automatically create createdAt/updatedAt timestamp fields
    timestamps: false,
    // don't pluralize name of database table
    freezeTableName: true,
    // use underscores instead of camel-casing (i.e. `comment_text` and not `commentText`)
    underscored: true,
    // make it so our model name stays lowercase in the database
    modelName: 'user'
  }
);

module.exports = User;
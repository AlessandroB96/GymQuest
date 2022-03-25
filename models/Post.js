const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


//creating fields/columns for the Post model
//Post model takes in 2 parameters: the Post schema, and configuring the metadata and naming convention 

class Post extends Model {}

Post.init(
   {
       id: {
           type: DataTypes.INTEGER,
           allowNull: false,
           primaryKey: true,
           autoIncrement: true
       },
       title: {
           type: DataTypes.STRING,
           allowNull: false
       },
       post_url: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isUrl: true
            }
       },
       user_id: {    //this column determines who posts the news article 
           type: DataTypes.INTEGER,
           references: {
               model: 'user',
               key: 'id'      //references user model with the primary key 'id'
           }
       }
   },
   {
       sequelize,
       freezeTableName: true,
       underscored: true,
       modelName: 'post'
   }
);

module.exports = Post;
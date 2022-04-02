const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//FOR FUTURE DEVELOPMENT 

//creating fields/columns for the Post model
// class Post extends Model {}

// Post.init(
//    {
//        id: {
//            type: DataTypes.INTEGER,
//            allowNull: false,
//            primaryKey: true,
//            autoIncrement: true
//        },
//        title: {
//            type: DataTypes.STRING,
//            allowNull: false
//        },
//        post_url: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             validate: {
//                 isUrl: true
//             }
//        },
//        user_id: {  
//            type: DataTypes.INTEGER,
//            references: {
//                model: 'user',
//                key: 'id'      //references user model with the primary key 'id'
//            }
//        }
//    },
//    {
//        sequelize,
//        freezeTableName: true,
//        underscored: true,
//        modelName: 'post'
//    }
// );

// module.exports = Post;
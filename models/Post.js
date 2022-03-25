const { Model, DataTypes } = require('sequelize');
const sequelize =  require('../config/connection');

// create our Post model
class Post extends Model {}

// create fields/columns for Post model
// user_id is the foreign key and will reference the User model
Post.init(
    {
        //defines id, title and post_url
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
                isURL: true
            }
        },
        //defines user id
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
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
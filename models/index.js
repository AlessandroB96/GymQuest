const User = require('./User');
const Comment = require('./Comment');
const Post = require('./Post');
const Workout = require('./Workout');
const Category = require('./Category');

Category.hasMany(Workout, {
    foreignKey: 'category_id'
});

Workout.belongsTo(Category, {
    foreignKey: 'category_id'
});

User.hasMany(Workout, {
    foreignKey: 'user_id'
});

//must make reverse association to complete model link 
//belongsTo tells the server that a post can only belong to 1 user
Workout.belongsTo(User, {
    foreignKey: 'user_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

Comment.belongsTo(Workout, {
    foreignKey: 'post_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id'
});

Workout.hasMany(Comment, {
    foreignKey: 'post_id'
});


module.exports = { User, Comment, Post, Workout, Category}; 
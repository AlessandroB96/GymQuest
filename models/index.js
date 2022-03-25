const User = require('./User');
const Comment = require('./Comment');
const Post = require('./Post');
const Workout = require('./Workout');

User.hasMany(Post, {
    foreignKey: 'user_id'
});

//must make reverse association to complete model link 
//belongsTo tells the server that a post can only belong to 1 user
Post.belongsTo(User, {
    foreignKey: 'user_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id'
});


module.exports = { User, Comment, Post, Workout}; 
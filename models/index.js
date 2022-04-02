const User = require('./User');
const Comment = require('./Comment');
// const Post = require('./Post');
const Workout = require('./Workout');
const Category = require('./Category');

Category.hasMany(Workout, {
    foreignKey: 'category_id',
    onDelete: 'SET NULL'
});

Workout.belongsTo(Category, {
    foreignKey: 'category_id',
    onDelete: 'SET NULL'
});

//THIS WILL BE USED FOR TRAINERS FEATURE 

// User.hasMany(Workout, {
//     foreignKey: 'user_id',
//     onDelete: 'SET NULL'
// });

//must make reverse association to complete model link 
//belongsTo tells the server that a post can only belong to 1 user
// Workout.belongsTo(User, {
//     foreignKey: 'user_id',
//     onDelete: 'SET NULL'
// });

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Comment.belongsTo(Workout, {
    foreignKey: 'workout_id',
    onDelete: 'SET NULL'
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Workout.hasMany(Comment, {
    foreignKey: 'workout_id',
    onDelete: 'SET NULL'
});


// module.exports = { User, Comment, Post, Workout, Category}; 
module.exports = { User, Comment, Workout, Category}; 
const { Comment } = require('../models');

const commentdata = [
    {
        comment_text: 'Tricep extensions are an essential!',
        user_id: 12,
        workout_id: 1
    },
    {
        comment_text: 'Great to finish your workout with this',
        user_id: 6,
        workout_id: 1
    },
    {
        comment_text: 'Lower weights, higher reps is the way to go with this',
        user_id: 3,
        workout_id: 1
    },
    {
        comment_text: 'Great workout',
        user_id: 3,
        workout_id: 1
    },
    {
        comment_text: "this ones great",
        user_id: 7,
        workout_id: 2
    },
    {
        comment_text: 'I prefer this with a barbell',
        user_id: 1,
        workout_id: 2
    },
    {
        comment_text: 'this one is amazing',
        user_id: 13,
        workout_id: 2
    },
    {
        comment_text: 'I recommend to start with low weight to get the right form',
        user_id: 14,
        workout_id: 2
    },
    {
        comment_text: 'this one is a must',
        user_id: 12,
        workout_id: 3
    },
    {
        comment_text: 'good workout',
        user_id: 3,
        workout_id: 3
    },
    {
        comment_text: 'this one is one of my favorite',
        user_id: 8,
        workout_id: 3
    },
    {
        comment_text: "Make sure your form is right. Don't strain your back with too much weight",
        user_id: 9,
        workout_id: 3
    },
    {
        comment_text: 'Buy one and put it on your door frame. These are great to do msot days',
        user_id: 3,
        workout_id: 4
    },
    {
        comment_text: 'pull ups are essential',
        user_id: 2,
        workout_id: 4
    },
    {
        comment_text: 'Gradually work your way up',
        user_id: 7,
        workout_id: 4
    },
    {
        comment_text: 'Amazing workout',
        user_id: 6,
        workout_id: 4
    },
    {
        comment_text: 'curls are a must',
        user_id: 15,
        workout_id: 5
    },
    {
        comment_text: 'I hurt my wrist so make sure to have proper form',
        user_id: 2,
        workout_id: 5
    },
    {
        comment_text:"i start off with these when I do arms",
        user_id: 14,
        workout_id: 5
    },
    {
        comment_text:'these are great',
        user_id: 8,
        workout_id: 5
    },
    {
        comment_text: 'Essential for building mass',
        user_id: 4,
        workout_id: 6
    },
    {
        comment_text: 'You have to do these ones honestly',
        user_id: 1,
        workout_id: 6
    },
    {
        comment_text: 'Good workout',
        user_id: 2,
        workout_id: 6
    },
    {
        comment_text: 'These ones are amazing',
        user_id: 10,
        workout_id: 6
    },
    {
        comment_text: 'These ones build forearms too',
        user_id: 9,
        workout_id: 7
    },
    {
        comment_text: 'I love doing this workout until failure',
        user_id: 10,
        workout_id: 7
    },
    {
        comment_text: 'Nice workout',
        user_id: 11,
        workout_id: 7
    },
    {
        comment_text: 'great workout',
        user_id: 5,
        workout_id: 7
    },
    {
        comment_text: 'I prefer this with a barbell',
        user_id: 4,
        workout_id: 8
    },
    {
        comment_text: 'Great to finish your workout with this',
        user_id: 5,
        workout_id: 8
    },
    {
        comment_text: 'this ones great',
        user_id: 7,
        workout_id: 8
    },
    {
        comment_text: 'this one is one of my favorite',
        user_id: 13,
        workout_id: 8
    },
    {
        comment_text: 'Nice workout',
        user_id: 14,
        workout_id: 9
    },
    {
        comment_text: 'Great to finish your workout with this',
        user_id: 8,
        workout_id: 9
    },
    {
        comment_text: 'this one is one of my favorite',
        user_id: 1,
        workout_id: 9
    },
    {
        comment_text: "I prefer this with a barbell",
        user_id: 13,
        workout_id: 9
    },
    {
        comment_text: 'Great workout',
        user_id: 4,
        workout_id: 10
    },
    {
        comment_text: 'this ones great',
        user_id: 9,
        workout_id: 10
    },
    {
        comment_text: 'this one is a little tough',
        user_id: 3,
        workout_id: 10
    },
    {
        comment_text: 'Nice workout',
        user_id: 7,
        workout_id: 10
    },
    {
        comment_text: 'Great to finish your workout with this',
        user_id: 12,
        workout_id: 11
    },
    {
        comment_text: 'Great workout',
        user_id: 1,
        workout_id: 11
    },
    {
        comment_text: 'this ones great',
        user_id: 5,
        workout_id: 11
    },
    {
        comment_text: 'this one is one of my favorite',
        user_id: 4,
        workout_id: 11
    },
    {
        comment_text: 'Nice workout',
        user_id: 8,
        workout_id: 12
    },
    {
        comment_text: 'this one is a little tough',
        user_id: 6,
        workout_id: 12
    },
    {
        comment_text: 'high weight, low reps is amazing for this',
        user_id: 12,
        workout_id: 12
    },
    {
        comment_text: 'this one is one of my favorite',
        user_id: 2,
        workout_id: 12
    },
    {
        comment_text: 'Great to finish your workout with this',
        user_id: 1,
        workout_id: 13
    },
    {
        comment_text:"Great workout",
        user_id: 9,
        workout_id: 13
    },
    {
        comment_text:'I prefer this with a barbell',
        user_id: 11,
        workout_id: 13
    },
    {
        comment_text: 'this ones great',
        user_id: 14,
        workout_id: 13
    },
    {
        comment_text: 'this one is a little tough',
        user_id: 4,
        workout_id: 14
    },
    {
        comment_text: 'Lower weights, higher reps is the way to go with this',
        user_id: 3,
        workout_id: 14
    },
    {
        comment_text: 'this one is one of my favorite',
        user_id: 15,
        workout_id: 14
    },
    {
        comment_text: 'this one is a must',
        user_id: 15,
        workout_id: 14
    },
    {
        comment_text: 'high weight, low reps is amazing for this',
        user_id: 11,
        workout_id: 15
    },
    {
        comment_text: 'Great to finish your workout with this',
        user_id: 8,
        workout_id: 15
    },
    {
        comment_text: 'this one is one of my favorite',
        user_id: 8,
        workout_id: 15
    },
    {
        comment_text: 'this ones great',
        user_id: 9,
        workout_id: 15
    },
    {
        comment_text: 'this one is a little tough',
        user_id: 12,
        workout_id: 16
    },
    {
        comment_text: 'high weight, low reps is amazing for this',
        user_id: 12,
        workout_id: 16
    },
    {
        comment_text: 'Lower weights, higher reps is the way to go with this',
        user_id: 15,
        workout_id: 16
    },
    {
        comment_text: 'Great workout',
        user_id: 13,
        workout_id: 16
    },
    {
        comment_text: 'I prefer this with a barbell',
        user_id: 6,
        workout_id: 17
    },
    {
        comment_text: 'Lower weights, higher reps is the way to go with this',
        user_id: 14,
        workout_id: 17
    },
    {
        comment_text: "this ones great",
        user_id: 11,
        workout_id: 17
    },
    {
        comment_text: 'this one is a little tough',
        user_id: 5,
        workout_id: 17
    },
    {
        comment_text: 'I prefer this with a barbell',
        user_id: 6,
        workout_id: 18
    },
    {
        comment_text: 'high weight, low reps is amazing for this',
        user_id: 2,
        workout_id: 18
    },
    {
        comment_text: 'this one is a must',
        user_id: 6,
        workout_id: 18
    },
    {
        comment_text: 'Great to finish your workout with this',
        user_id: 12,
        workout_id: 18
    },
    {
        comment_text: 'Great workout',
        user_id: 14,
        workout_id: 19
    },
    {
        comment_text: 'I prefer this with a extended bar',
        user_id: 9,
        workout_id: 19
    },
    {
        comment_text: 'high weight, low reps is amazing for this',
        user_id: 8,
        workout_id: 19
    },
    {
        comment_text: 'this ones great',
        user_id: 3,
        workout_id: 19
    },
    {
        comment_text: 'this one is a little tough',
        user_id: 1,
        workout_id: 20
    },
    {
        comment_text: 'this one is a must',
        user_id: 9,
        workout_id: 20
    },
    {
        comment_text: 'Lower weights, higher reps is the way to go with this',
        user_id: 13,
        workout_id: 20
    },
    {
        comment_text: 'Gradually work your way up',
        user_id: 10,
        workout_id: 20
    },
    {
        comment_text:"this ones great",
        user_id: 15,
        workout_id: 21
    },
    {
        comment_text:'this one is a little tough',
        user_id: 8,
        workout_id: 21
    },
    {
        comment_text: 'this one is a must',
        user_id: 4,
        workout_id: 21
    },
    {
        comment_text: 'Nice workout',
        user_id: 9,
        workout_id: 21
    },
    {
        comment_text: 'Great workout',
        user_id: 12,
        workout_id: 22
    },
    {
        comment_text: 'this one is a must',
        user_id: 4,
        workout_id: 22
    },
    {
        comment_text: 'Gradually work your way up',
        user_id: 3,
        workout_id: 22
    },
    {
        comment_text: 'Great to finish your workout with this',
        user_id: 7,
        workout_id: 22
    },
    {
        comment_text: 'high weight, low reps is amazing for this',
        user_id: 8,
        workout_id: 23
    },
    {
        comment_text: 'this one is a must',
        user_id: 12,
        workout_id: 23
    },
    {
        comment_text: 'Great workout',
        user_id: 8,
        workout_id: 23
    },
    {
        comment_text: 'this ones great',
        user_id: 7,
        workout_id: 23
    },
    {
        comment_text: 'this one is a little tough',
        user_id: 2,
        workout_id: 24
    },
    {
        comment_text: 'Lower weights, higher reps is the way to go with this',
        user_id: 15,
        workout_id: 24
    },
    {
        comment_text: 'Great workout',
        user_id: 5,
        workout_id: 24
    },
    {
        comment_text: 'this one is a must',
        user_id: 7,
        workout_id: 24
    },
    {
        comment_text: 'this ones great',
        user_id: 13,
        workout_id: 25
    },
    {
        comment_text: "Great to finish your workout with this",
        user_id: 12,
        workout_id: 25
    },
    {
        comment_text: 'Gradually work your way up',
        user_id: 9,
        workout_id: 25
    },
    {
        comment_text: 'Great to finish your workout with this',
        user_id: 6,
        workout_id: 25
    },
    {
        comment_text: 'this one is a little tough',
        user_id: 8,
        workout_id: 26
    },
    {
        comment_text: 'this one is a must',
        user_id: 11,
        workout_id: 26
    },
    {
        comment_text: 'this ones great',
        user_id: 14,
        workout_id: 26
    },
    {
        comment_text: 'high weight, low reps is amazing for this',
        user_id: 7,
        workout_id: 26
    },
    {
        comment_text: 'Gradually work your way up',
        user_id: 5,
        workout_id: 27
    },
    {
        comment_text: 'Lower weights, higher reps is the way to go with this',
        user_id: 2,
        workout_id: 27
    },
    {
        comment_text: 'Great to finish your workout with this',
        user_id: 5,
        workout_id: 27
    },
    {
        comment_text: 'this one is a must',
        user_id: 6,
        workout_id: 27
    },
    {
        comment_text: 'Great workout',
        user_id: 8,
        workout_id: 28
    },
    {
        comment_text: 'Great to finish your workout with this',
        user_id: 2,
        workout_id: 28
    },
    {
        comment_text: 'this one is a little tough',
        user_id: 4,
        workout_id: 28
    },
    {
        comment_text:"this one is a must",
        user_id: 5,
        workout_id: 28
    },
    {
        comment_text:'Gradually work your way up',
        user_id: 9,
        workout_id: 29
    },
    {
        comment_text: 'this ones great',
        user_id: 7,
        workout_id: 29
    },
    {
        comment_text: 'Great workout',
        user_id: 12,
        workout_id: 29
    },
    {
        comment_text: 'high weight, low reps is amazing for this',
        user_id: 11,
        workout_id: 29
    },
    {
        comment_text: 'this ones great',
        user_id: 14,
        workout_id: 30
    },
    {
        comment_text: 'this one is a little tough',
        user_id: 1,
        workout_id: 30
    },
    {
        comment_text: 'Great to finish your workout with this',
        user_id: 5,
        workout_id: 30
    },
    {
        comment_text: 'Gradually work your way up',
        user_id: 1,
        workout_id: 30
    },
    {
        comment_text: 'this one is a must',
        user_id: 4,
        workout_id: 31
    },
    {
        comment_text: 'Great to finish your workout with this',
        user_id: 3,
        workout_id: 31
    },
    {
        comment_text: 'Great workout',
        user_id: 4,
        workout_id: 31
    },
    {
        comment_text: 'this ones great',
        user_id: 7,
        workout_id: 31
    },
    {
        comment_text: 'Nice workout',
        user_id: 3,
        workout_id: 32
    },
    {
        comment_text: 'high weight, low reps is amazing for this',
        user_id: 5,
        workout_id: 32
    },
    {
        comment_text: 'this one is a must',
        user_id: 4,
        workout_id: 32
    },
    {
        comment_text: 'this one is a little tough',
        user_id: 12,
        workout_id: 32
    },
    {
        comment_text: 'this ones great',
        user_id: 13,
        workout_id: 33
    },
    {
        comment_text: 'Gradually work your way up',
        user_id: 15,
        workout_id: 33
    },
    {
        comment_text: 'Lower weights, higher reps is the way to go with this',
        user_id: 8,
        workout_id: 33
    },
    {
        comment_text: 'Great workout',
        user_id: 4,
        workout_id: 33
    },
    {
        comment_text: "this one is a little tough",
        user_id: 5,
        workout_id: 34
    },
    {
        comment_text:'Great to finish your workout with this',
        user_id: 9,
        workout_id: 34
    },
    {
        comment_text: 'this one is a must',
        user_id: 11,
        workout_id: 34
    },
    {
        comment_text: 'Gradually work your way up',
        user_id: 4,
        workout_id: 34
    },
    {
        comment_text: 'Nice workout',
        user_id: 3,
        workout_id: 35
    },
    {
        comment_text: 'high weight, low reps is amazing for this',
        user_id: 8,
        workout_id: 35
    },
    {
        comment_text: 'Great to finish your workout with this',
        user_id: 1,
        workout_id: 35
    }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;

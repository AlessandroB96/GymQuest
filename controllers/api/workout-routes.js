const router = require('express').Router();
const {Workout, Category} = require('../../models');

//get all posts from database 
router.get('/workouts', (req, res) => {
    Workout.findAll({
        attributes: [
        'id',
        'workout_name',
    ],
        include: [
            {
                model: Category,
                attributes: ['id','category_name']
            }
        ]
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;
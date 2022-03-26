const router = require('express').Router();
const {Workout, Category} = require('../../models');

//get all posts from database 
router.get('/legs', (req, res) => {
    Workout.findAll({
        where: {
            category_id: 2
        },
        attributes: [
        'id',
        'workout_name',
        'workout_url'
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
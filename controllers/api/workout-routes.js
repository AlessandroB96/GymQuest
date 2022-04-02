const router = require('express').Router();
const {Workout, Category} = require('../../models');

//get all workouts from database 
router.get('/workouts', (req, res) => {
    Workout.findAll({
        attributes: [
        'id',
        'workout_name',
        'workout_image',
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

router.get('/workouts/:workout_name', (req, res) => {
    Workout.findOne({
        where: {
            workout_name: req.params.workout_name
        },
        attributes: [
        'id',
        'workout_name',
        'workout_image',
        'workout_url'
    ],
        include: [
            {
                model: Category,
                attributes: ['id','category_name']
            }
        ]
    })
    .then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }
        res.json(dbPostData);
        
        // serialize the data
      const post = dbPostData.get({ plain: true });

      // pass data to template
      res.render('single-post', { post });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;
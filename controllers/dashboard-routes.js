const router = require('express').Router();
const { Category, Workout, Comment, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
    Category.findAll({
        attributes: [
        'id',
        'category_name'
    ]
    })
    .then(dbCategoryData => {
        // serialize data before passing to template
        const categories = dbCategoryData.map(category => category.get({ plain: true }));
        res.render('dashboard', { categories, loggedIn: true });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//get routes for each body group
router.get('/:category_name', withAuth, (req, res) => {
    Category.findOne({
        where: {
            category_name: req.params.category_name
        }, 
        attributes: [
            'id',
            'category_name', 
            'created_at'
        ],
            include: [
                {
                    model: Workout,
                    attributes: ['id','workout_name', 'workout_image', 'workout_url', 'created_at']
                }
            ]
    })
    .then(dbCategoryData => {
        if (dbCategoryData) {
            const category = dbCategoryData.get({ plain: true });

            res.render('category', {
                category,
                loggedIn: true
            });
        } else {
            res.status(404).end();
        }
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

//get route: individual workouts
router.get('/workout/:workout_name', withAuth, (req, res) => {
    Workout.findOne({
        where: {
            workout_name: req.params.workout_name
        }, 
        attributes: [
            'id',
            'workout_name',
            'workout_image',
            'workout_url',
            'created_at'
        ],
            include: [
                {
                    model: Category,
                    attributes: ['id','category_name', 'created_at']
                },
                {
                    model: Comment,
                    attributes: ['id', 'comment_text', 'user_id', 'workout_id', 'created_at'],
                    include: {
                        model: User,
                        attributes: ['username']
                    }
                }
            ]
    })
    .then(dbWorkoutData => {
        if (dbWorkoutData) {
            const workout = dbWorkoutData.get({ plain: true });

            res.render('single-post', {
                workout,
                loggedIn: true
            });
        } else {
            res.status(404).end();
        }
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

module.exports = router;




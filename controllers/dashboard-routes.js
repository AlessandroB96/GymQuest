const router = require('express').Router();
const { Category, Workout } = require('../models');

router.get('/', (req, res) => {
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

router.get('/:id', (req, res) => {
    Category.findOne({
        where: {
            id: req.params.id
        }, 
        attributes: [
            'id',
            // 'workout_name',
            // 'workout_url',
            'category_name', 
            'created_at'
        ],
            include: [
                {
                    model: Workout,
                    attributes: ['id','workout_name', 'workout_url', 'created_at']
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

router.get('/workout/:id', (req, res) => {
    Workout.findOne({
        where: {
            id: req.params.id
        }, 
        attributes: [
            'id',
            'workout_name',
            'workout_url',
            // 'category_name', 
            'created_at'
        ],
            include: [
                {
                    model: Category,
                    attributes: ['id','category_name', 'created_at']
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

// router.get('/', (req, res) => {
//     if (req.session.loggedIn) {
//         res.redirect('dashboard');
//         return;
//     }
    
//     res.render('dashboard');
// });


module.exports = router;




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
    Workout.findAll({
        where: {
            category_id: 1
        }, 
        attributes: [
            'id',
            'workout_name',
            'workout_url',
            'created_at'
        ],
            include: [
                {
                    model: Category,
                    attributes: ['id','category_name', 'created_at']
                }
            ]
    })
    .then(dbArmData => {
        if (dbArmData) {
            const workouts = dbArmData.map(arm => arm.get({ plain: true }));

            res.render('arms', {
                workouts,
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




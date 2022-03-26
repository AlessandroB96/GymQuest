const router = require('express').Router();
const { Category } = require('../models');

router.get('/', (req, res) => {
    Category.findAll({
        attributes: [
        'id',
        'category_name'
    ]
    })
    .then(dbPostData => {
        // serialize data before passing to template
        const categories = dbPostData.map(category => category.get({ plain: true }));
        res.render('dashboard', { categories, loggedIn: true });
    })
    .catch(err => {
        console.log(err);
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




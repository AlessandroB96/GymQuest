const router = require('express').Router();

// GET /login
router.get('/', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('dashboard');
        return;
    }
    
    res.render('homepage');
});

// GET /signup
router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    
    res.render('signup');
});

module.exports = router;

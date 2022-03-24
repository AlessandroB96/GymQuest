// creating 5 routes that will work with User model to perform CRUD operations 
const router = require('express').Router();
const User = require('../../models');

router.get('/', (req, res) => {
    //access our User model and run .findAll() method (same as SELECT * FROM users)
    User.findAll({
        attributes: { exclude: ['password']}
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    User.findOne({     //same as `SELECT * FROM users WHERE id = 1`
        attributes: { exclude: ['password']},
        where: {
            id: req.params.id
        },
        // include: [
        //     {
        //       model: Post,
        //       attributes: ['id', 'title', 'post_url', 'created_at']
        //     },
        //     {
        //         model: Comment,
        //         attributes: ['id', 'comment_text', 'created_at'],
        //         include: {
        //           model: Post,
        //           attributes: ['title']
        //         }
        //       },
        //       {
        //         model: Post,
        //         attributes: ['title'],
        //         through: Vote,
        //         as: 'voted_posts'
        //       }
        //   ]
    })
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this id'});
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    });
});

//POST /api/users
router.post('/', (req, res) => {
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
    .then(dbUserData => {
        //gives server easy access to user id, username and boolean describing whether or not the user logged in 
        // req.session.save(() => {
        //     req.session.user_id = dbUserData.id;
        //     req.session.username = dbUserData.username;
        //     req.session.loggedIn = true;
            res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


module.exports = router;
const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

//get all comments
router.get('/', (req, res) => {
    Comment.findAll({
        attributes: 
        [
            'id',
            'user_id',
            'workout_id',
            'comment_text',
        ],
    })    
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//post comment route 
router.post('/', withAuth, (req, res) => {
    if (req.session) {
        Comment.create({ 
            comment_text: req.body.comment_text,
            workout_id: req.body.workout_id,
            // use the id from the session
            user_id: req.session.user_id
        })
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    }
});

//delete comment route to be used soon
router.delete('/:id', withAuth, (req, res) => {
    Comment.destroy({
        where: {
            id: req.params.id 
        }
    })
    .then(dbCommentData => {
        if (!dbCommentData) {
            res.status(404).json({ message: 'No comment found with this id'});
            return;
        }
        res.json(dbCommentData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;
const router = require('express').Router();
const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');
const categoryRoutes = require('./category-routes');
const workoutRoutes = require('./workout-routes');
const abworkoutRoutes = require('./abdominals-routes');
const armRoutes = require('./arms-routes');
const backRoutes = require('./back-routes');
const cardioRoutes = require('./cardio-routes');
const chestRoutes = require('./chest-routes');
const legRoutes = require('./legs-routes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
router.use('/categories', categoryRoutes);
router.use('/categories', workoutRoutes);
router.use('/categories', abworkoutRoutes);
router.use('/categories', armRoutes);
router.use('/categories', backRoutes);
router.use('/categories', cardioRoutes);
router.use('/categories', chestRoutes);
router.use('/categories', legRoutes);

module.exports = router;


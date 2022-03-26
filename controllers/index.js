const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const dashboardRoutes = require('./dashboard-routes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);


//if we make an endpoitn request that doesnt exist, 404 err
router.use((req, res) => {
    res.status(404).end();
  });

module.exports = router;
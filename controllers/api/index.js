const router = require('express').Router();
const userRoutes = require('./userRoutes');
const profileRoutes = require('./profileRoutes');
const characterRoutes = require('./characterRoutes');
const portraitRoutes = require('./characterRoutes');

router.use('/users', userRoutes);
router.use('/', profileRoutes);
router.use('/characters', characterRoutes);
router.use('/portrait', portraitRoutes);

module.exports = router;

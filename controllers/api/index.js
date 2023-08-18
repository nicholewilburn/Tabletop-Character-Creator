const router = require('express').Router();
const userRoutes = require('./userRoutes');
const profileRoutes = require('./profileRoutes');
const characterRoutes = require('./characterRoutes');

router.use('/users', userRoutes);
router.use('/', profileRoutes);
router.use('/characters', characterRoutes);

module.exports = router;

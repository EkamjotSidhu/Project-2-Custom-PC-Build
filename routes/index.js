const router= require('express').Router();

const monitorRoutes = require('./monitor');
const userRoutes = require('./user');

router.use('/monitor', monitorRoutes);
router.use('/user', userRoutes);
module.exports=router;


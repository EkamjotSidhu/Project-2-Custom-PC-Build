const router= require('express').Router();

const monitorRoutes = require('./monitor');
const userRoutes = require('./user');
const saveConfigRoutes= require('./saveconfig');

router.use('/monitor', monitorRoutes);
router.use('/user', userRoutes);
router.use('/saveconfig', saveConfigRoutes);
module.exports=router;


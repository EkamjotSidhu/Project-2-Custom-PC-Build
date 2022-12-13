const router= require('express').Router();

const monitorRoutes = require('./monitor');
const userRoutes = require('./user');
const saveConfigRoutes= require('./saveconfig');

const preBuildRoutesa= require('./preBuildPC');

router.use('/monitor', monitorRoutes);
router.use('/user', userRoutes);
router.use('/saveconfig', saveConfigRoutes);
router.use('/prebuild', preBuildRoutesa);
module.exports=router;


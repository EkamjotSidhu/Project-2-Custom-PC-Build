const router= require('express').Router();

const monitorRoutes = require('./monitor');

router.use('/monitor', monitorRoutes);

module.exports=router;
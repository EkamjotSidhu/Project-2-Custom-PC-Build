const router= require('express').Router();
const homepageRoutes= require('./homepage');
const loginSignupRoutes= require('./login-signup')
const apiRoutes= require('./api');
const custompcRoutes= require('./custom-pc');

const preBuiltRoutes= require('./pre-built');
router.use('/',homepageRoutes);
router.use('/login',loginSignupRoutes);
router.use('/api',apiRoutes);
router.use('/custom-pc', custompcRoutes);
router.use('/pre-built', preBuiltRoutes);
module.exports= router
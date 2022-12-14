const router = require('express').Router();
const sequelize = require('../config/connection');
// const withAuth =require('../utils/auth');

router.get('/', async (req,res)=>{
    try{
        await res.render('myaccount');
    }catch(err){
        res.status(500).json(err);
    }
});

module.exports=router;
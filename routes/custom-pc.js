const router = require('express').Router();
const sequelize = require('../config/connection');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req,res)=>{
    try{
        await res.render('custom-pc');
    }catch(err){
        res.status(500).json(err);
    }
});

module.exports=router;
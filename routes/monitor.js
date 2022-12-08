const router = require('express').Router();
const monitor= require('../Models/Monitor');
const sequelize = require('../config/connection');

router.get('/', async(req,res)=>{
    try{
        const getMonitor= await monitor.findAll();

        res.status(200).json(getMonitor);
    }catch(err){
        res.status(500).json(err);
    }
})

module.exports=router;
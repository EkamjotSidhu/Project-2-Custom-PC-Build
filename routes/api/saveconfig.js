const router = require('express').Router();
const saveConfig= require('../../Models/saveconfig');
const sequelize = require('../../config/connection');

router.post('/', async(req,res)=>{
    try{
        const postConfig= await saveConfig.create(req.body);

        ///res.status(200).json(postConfig);
        /// saved 
        res.render(); 
    }catch(err){
        res.status(500).json(err);
    }
})


router.get('/', async(req,res)=>{
    try{
        const getConfig= await saveConfig.findAll();

        res.status(200).json(getConfig);
    }catch(err){
        res.status(500).json(err);
    }
})


router.delete('/:id', async(req,res)=>{
    try{
        const delConfig= await saveConfig.destroy({where:{

            id: req.params.id

        }})

        res.status(200).json(delConfig);
    }catch(err){
        res.status(500).json(err);
    }
})
module.exports=router;

const router = require('express').Router();
const user= require('../Models/User');
const sequelize = require('../config/connection');
const { request } = require('express');

router.post('/', async (req, res) => {
    try {
        const postUser = await user.create({
            email: req.body.email,
            password: req.body.password
        })

        res.status(200).json(postUser)
     } catch (err) {
        res.status(500).json(err)
        }
});

router.get('/', async (req, res) => {
    try {
        const loginUser = await user.findOne({
            where: {email: req.body.email}
        });
        if (!loginUser) {
            res.status(404).json({message:"Enter a valid email"})
        } res.status(200).json(loginUser)
    } catch(err){res.status(500).json(err)}
} 

)


module.exports = router;
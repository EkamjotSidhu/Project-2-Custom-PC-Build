const router = require('express').Router();
// const user = require('../../Models/User');
const {User,saveConfig}= require('../../Models')
const sequelize = require('../../config/connection');


router.post('/', async (req, res) => {
    try {
        const postUser = await User.create({
            name:req.body.name,
            email:req.body.email,
            password: req.body.password
        });

        req.session.save(() => {
            // req.session.id = postUser.id;
            req.session.logged_in = true;
        })

        res.status(200).json(postUser)
    } catch (err) {
        res.status(500).json(err)
    }
});

router.post('/login', async (req, res) => {
    try {
        const loginUser = await User.findOne({
            where: { email: req.body.email }
        });
        if (!loginUser) {
            res.status(404).json({ message: "Enter a valid email" })
        }

        const validatePassword = loginUser.checkPassword(req.body.password)

        if (!validatePassword) {
            res.status(404).json({ message: "Invalid Password" })
        }

        req.session.save(() => {
            // req.session.id = postUser.id;
            req.session.logged_in = true;
        })

        res.json({ user: loginUser, message: 'You are now logged in!' });
    } catch (err) { res.status(500).json(err) }
})



router.get('/', async(req,res)=>{
    try{
        const getUser= await User.findAll({include:[{model:saveConfig}]})

        res.status(200).json(getUser)
    }catch(err){
        res.status(500).json(err);
    }
})

router.post('/logout', (req, res) => {
    
      req.session.destroy(() => {
        res.status(204).end();
      });
    });
  
  module.exports = router;
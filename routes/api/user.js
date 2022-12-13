const router = require('express').Router();
// const user= require('../../Models/User');
var admin = require("firebase-admin");

var serviceAccount = require("../../custom-pc-250ba-firebase-adminsdk-7qstt-e086144b39.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
// const sequelize = require('../../config/connection');

// router.post('/', async (req, res) => {
//     try {
//         const postUser = await user.create({
//             email: req.body.email,
//             password: req.body.password
//         })

//         res.status(200).json(postUser)
//      } catch (err) {
//         res.status(500).json(err)
//         }
// });

// router.get('/', async (req, res) => {
//     try {
//         const loginUser = await user.findOne({
//             where: {email: req.body.email}
//         });
//         if (!loginUser) {
//             res.status(404).json({message:"Enter a valid email"})
//         } res.status(200).json(loginUser)
//     } catch(err){res.status(500).json(err)}
// } 

// )

router.post('/', async (req, res) => {
    try {
        const postUser = await admin.auth().createUser({
            email: req.body.email,
            password: req.body.password,
            emailVerified:false,
            disabled: false
        })

        res.status(200).json(postUser)
     } catch (err) {
        res.status(500).json(err)
        }
});

router.get('/', async (req, res) => {
    try {
        const loginUser = await admin.auth().signIn({
            email: req.body.email,
            password: req.body.password,
            emailVerified:false,
            disabled: false
        });
        if (!loginUser) {
            res.status(404).json({message:"Enter a valid email"})
        } res.status(200).json(loginUser)
    } catch(err){res.status(500).json(err)}
} 

)


module.exports = router;